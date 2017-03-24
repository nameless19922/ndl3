const
	config = require('./config'),
	listeners = require('./listeners'),
	ChatApp = require('./chatapp');

	
	let webinarChat  = new ChatApp('webinar');
		facebookChat = new ChatApp('=========facebook');
		vkChat       = new ChatApp('---------vk');
		
	vkChat.setMaxListeners(
        config.vk.maxListeners
    );

	webinarChat
		.on('message', listeners.chatOnPrepare)
		.on('message', listeners.chatOnMessage);
		
	facebookChat
		.on('message', listeners.chatOnMessage)

	vkChat
		.on('message', listeners.chatOnPrepare)
		.on('message', listeners.chatOnMessage)
		.once('close', listeners.chatOnClose);
		
	// close vk
	setTimeout( () => {
		console.log('Закрываю вконтакте...');
		
		vkChat
			.removeAllListeners('message')
			.close();
	}, config.vk.interval);

	// close facebook
	setTimeout( () => {
		console.log('Закрываю фейсбук, все внимание — вебинару!');
		
		facebookChat.removeListener('message', listeners.chatOnMessage);
	}, config.fb.interval);

	// close webinar
	setTimeout( () => {
		console.log('Закрываю вебинар!');
		
		webinarChat.removeAllListeners('message');
	}, config.webinar.interval);