const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingbandlab')
		.setDescription('Replies with TheyFwZays Social Media Links '),
	async execute(interaction) {
        const https = require('node:https');
        const fs = require('node:fs')
        https.get('https://bandlab.com/', async (res) => {
          console.log('statusCode:', res.statusCode);
          console.log('headers:', res.headers);
        
          res.on('data', (d) => {
            process.stdout.write(d);
          });
          await interaction.reply(`statusCode: 301
headers: {
  'content-length': '0',
  connection: 'close',
  server: 'CloudFront',
  date: 'Thu, 20 Oct 2022 18:19:52 GMT',
  location: 'https://www.bandlab.com/',
  'x-cache': 'LambdaGeneratedResponse from cloudfront',
  via: '1.1 b811db48800bf619dbaff61a71022f7e.cloudfront.net (CloudFront)',
  'x-amz-cf-pop': 'IAD79-C3',
  'x-amz-cf-id': 'hYjGo8CWNCFDbNF5P4DeA4NvE7RXpmYOVKVAKP7rjeGwzbZhdhB6Tg=='
}`);
        }).on('error', (e) => {
            console.error(e);
          });
		
	},
};