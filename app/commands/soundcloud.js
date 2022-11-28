const { SlashCommandBuilder } = require('discord.js');
const { other } = require('../../server.config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('soundcloud')
		.setDescription('Replies with the creators soundcloud!'),
	async execute(interaction) {
		await interaction.reply(`The creators soundcloud is: ${other.DiscordServerLink}`);
	},
};