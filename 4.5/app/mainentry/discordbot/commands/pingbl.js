const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingbandlab')
		.setDescription('Replies with TheyFwZays Social Media Links '),
	async execute(interaction) {
        const request = require('request');
        request({
          url: "https://bandlab.com/",
          json: "https://www.bandlab.com/web-app/manifest-bb9e077cad.json"
        }, (err,res,body)=>{
          interaction.reply(res.body)
        })

		
	},
};