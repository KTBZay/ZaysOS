const { SlashCommandBuilder } = require('discord.js');
const { other } = require('../../server.config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('youtube')
		.setDescription('Replies with the creators youtube!'),
	async execute(interaction) {
		await interaction.reply(`The Youtube link is: ${other.YouTubeLink}`);
	},
};