const { SlashCommandBuilder } = require('discord.js');
const { other } = require('../../server.config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('twitter')
		.setDescription('Replies with the creators twitter!'),
	async execute(interaction) {
		await interaction.reply(`The Twitter link is: ${other.TwitterLink}`);
	},
};