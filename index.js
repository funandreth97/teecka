const commando = require('discord.js-commando');
const bot = new commando.Client();

/* A test command. 
bot.on('message', (message) => {
	if(message.content == 'ping' || message.content == 'Ping'){
		//message.reply('Pong!');
		message.channel.sendMessage('Pong!');
	}
}); 
*/

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('staff', 'Staff');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('BOT_TOKEN');