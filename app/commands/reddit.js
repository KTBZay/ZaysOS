const { SlashCommandBuilder } = require('discord.js');
const { other } = require('../../server.config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reddit')
		.setDescription('Replies with the creators reddit!'),
	async execute(interaction) {
		await interaction.reply(`The Reddit link is: ${other.RedditLink}`);
	},
};