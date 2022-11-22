const { SlashCommandBuilder } = require('discord.js');
const { other } = require('../../server.config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('twitch')
		.setDescription('Replies with the creators twitch!'),
	async execute(interaction) {
		await interaction.reply(`The twitch link is: ${other.TwitchChannelLink}`);
	},
};