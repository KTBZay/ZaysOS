async function Deploy () {
const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const fs = require('node:fs'),
      path = require("node:path");
const { token } = require('../../userconfig/main.conf');
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationCommands("1007350569851179008"), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.name}`))
	.catch(console.error);
}
module.exports = {
	Deploy
}