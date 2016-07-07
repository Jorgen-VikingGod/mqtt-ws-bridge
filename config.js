var config = {

	loggingLevel: 'DEBUG',

	http: {
		port: 8080
	},

	mqtt: {
		port: 1883,
		hostname: 'localhost',
		options:
		{
			clientId: 'TestMQTTWSBridge',
			username: '<mqtt-username>',
			password: '<mqtt-password>'
		}
	}
}

module.exports = config;
