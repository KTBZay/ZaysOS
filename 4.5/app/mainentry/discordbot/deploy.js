const bits = require('../../userconfig/_bits.json');
if(bits.Bot1['IsEnabled?'] === true){
const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const fs = require('node:fs'),
      path = require("node:path");
const {  token1 } = require('../../userconfig/main.conf');
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token1);

rest.put(Routes.applicationCommands("1007350569851179008"), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} commands`))
	.catch(console.error);
   
}
if(bits.Bot2['IsEnabled?'] === true){
	const { REST, SlashCommandBuilder, Routes } = require('discord.js');
	const fs = require('node:fs'),
		  path = require("node:path");
	const { token2 } = require('../../userconfig/main.conf');
	const commands = [];
	const commandsPath = path.join(__dirname, 'commands');
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		commands.push(command.data.toJSON());
	}
	
	const rest = new REST({ version: '10' }).setToken(token2);
	
	rest.put(Routes.applicationCommands("1007350569851179008"), { body: commands })
		.then((data) => console.log(`Successfully registered ${data.name}`))
		.catch(console.error);
}
if(bits.Bot3['IsEnabled?'] === true){
	const { REST, SlashCommandBuilder, Routes } = require('discord.js');
	const fs = require('node:fs'),
		  path = require("node:path");
	const {token3 } = require('../../userconfig/main.conf');
	const commands = [];
	const commandsPath = path.join(__dirname, 'commands');
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		commands.push(command.data.toJSON());
	}
	
	const rest = new REST({ version: '10' }).setToken(token3);
	
	rest.put(Routes.applicationCommands("1007350569851179008"), { body: commands })
		.then((data) => console.log(`Successfully registered ${data.name}`))
		.catch(console.error);
    
}

 