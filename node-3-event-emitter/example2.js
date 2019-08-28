var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('data', (data) => {
	console.log("Printing your data: " );
	console.log(data);
});


eventEmitter.emit('data', `Many objects in a Node emit events, for example, a net.Server emits an event each time a peer connects to it, 
an fs.readStream emits an event when the file is opened. All objects which emit events are the instances of events.EventEmitter.`);