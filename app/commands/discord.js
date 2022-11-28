const { SlashCommandBuilder } = require('discord.js');
const { other } = require('../../server.config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('discord')
		.setDescription('Replies with the support discord server!'),
	async execute(interaction) {
		await interaction.reply(`The support server is: ${other.DiscordServerLink}`);
	},
};