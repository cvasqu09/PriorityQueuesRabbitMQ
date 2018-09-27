const express = require('express');
const router = express.Router();
const amqp = require('amqplib/callback_api');
const queueName = 'rabbq';

router.get('/', (req, res, next) => {
  var channel = null;
  amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
      if(err) {
        console.log('channel err' + err);
      }

      ch.get(queueName, {noAck: true}, (err, msg) => {
        if(msg) {
          console.log(msg);
          conn.close();
          return res.status(200).json({
            'message': msg.content.toString()
          })
        } else {
          console.log('no message')
          conn.close();
          return res.status(204);
        }
      });
    });
  });
});

module.exports = router;
