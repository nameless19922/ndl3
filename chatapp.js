const EventEmitter = require('events');


module.exports = class ChatApp extends EventEmitter {
	/**
	* @param {String} title
	*/
	constructor(title) {
		super();

		this.title = title;

		// send every second a message
		this.interval = setInterval(() => {
			this.emit('message', `${this.title}: ping-pong`);
		}, 1000);
	}
	
	close() {
		this.emit('close', this.title);
	}
}
