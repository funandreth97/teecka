const commando = require('discord.js-commando');

class NewTicketCommand extends commando.Command {

	constructor(client) {
		super(client, {
			name: 'new',
			group: 'ticketing',
			memberName: 'new',
			description: 'Creates a new ticket for the user running the command.'
		});
	}

	async run(message, args) {
		
	}
}

module.exports = DiceRollCommand;