const express = require('express');
const router = express.Router();
const util = require('util');

const amqp = require('amqplib/callback_api');

router.post('/', (req, res, next) => {
	console.log('req' + util.inspect(req.body));
	return res.status(200).json({
		'message': 'Message poster'
	})
	// try {
	// 	amqp.connect('amqp://localhost', function(err, conn) {
	// 	  conn.createChannel(function(err, ch) {
	// 			var exchange = 'rabbex';

  //       ch.assertExchange(exchange, 'fanout', {durable: false});
        
  //       ch.assertQueue('rabbq', {exclusive: true}, function(err, q) {
  //         console.log('Binding to q to ex');
	// 				ch.bindQueue(q.queue, exchange);
	// 				console.log('Request: ' + JSON.stringify(req.body));
  //         ch.publish(exchange, '', new Buffer(req.body.message))
  //       });
      
	// 		})
	// 	});
	// } catch (err) {
	// 	return res.status(500).json({
	// 		'message': 'Error occurred while posting message'
	// 	});
	// }

	// return res.status(201).json({
	// 	'message': 'Message posted'
	// });

})

module.exports = router;