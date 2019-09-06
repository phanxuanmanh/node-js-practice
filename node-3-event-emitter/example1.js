var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.addListener('fire', () => {
	console.log("Get out by the exit door");
});

eventEmitter.addListener('fire', () => {
	console.log("Cover your nose");
});


eventEmitter.emit('fire');