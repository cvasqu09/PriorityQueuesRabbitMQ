const express = require('express');
const router = express.Router();
const util = require('util');

const amqp = require('amqplib/callback_api');

router.post('/', (req, res, next) => {
	console.log('req' + util.inspect(req.body));

  amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
      var exchange = 'rabbex';

      // Check that the exchange exists, create it if it doesn't
      ch.checkExchange(exchange, (err, ok) => {
        if(err) {
          console.log('Errored checking exchange. Asserting Exchange');
          ch.assertExchange(exchange, {durable: true, exclusive: false});
          console.log(err);
        } else {
          console.log('Checked exchange')

        }
      });

      // Connect to the queue/create it if it doesn't exist
      ch.assertQueue('rabbq', {exclusive: false, durable: true, autoDelete: false, maxPriority: 10}, function(err, q) {
        if(err) {
          return res.status(500).json({
            'message': 'Error occurred asserting queue'
          });
        }

        try {
          ch.bindQueue(q.queue, exchange);
          console.log('Request: ' + JSON.stringify(req.body));
          ch.publish(exchange, '', new Buffer(req.body.message), {priority: Number(req.body.priority)});
          // Close connection after 2 seconds to let message get published
          setTimeout(() => {
            conn.close();
            return res.status(201).json({
              'result': 'Successfully posted',
              'message': req.body.message
            });
          }, 100);
        } catch (err) {
          console.log(err);
          return res.status(500).json({
            'message': 'Error binding to queue'
          });
        }
      });
    });
  });


})

module.exports = router;
