const bits = require('../../userconfig/_bits.json');
const { readystatemsg, botusername } = require('../../userconfig/customData.conf');
const { token1,token2,token3 } = require('../../userconfig/main.conf');
const path = require('node:path');
const fs = require('node:fs')
if(bits.Bot1['IsEnabled?'] === true){
    
    const MutiAPI = require('./_mutiAPi')
    const {Client, Collection} = require('discord.js')
    const client = new Client({intents: ["GuildMessages", "Guilds", "GuildMessageTyping"]})
    const commands = new Collection();
    
    // Main Bot
    client.commands = new Collection();
    const commandsPath = path.join(__dirname, './commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        // Set a new item in the Collection
        // With the key as the command name and the value as the exported module
        client.commands.set(command.data.name, command);
    }
    
    client.on("ready", ()=>{
        const MutiAPI = require('./_mutiAPi')
        console.log( `"${botusername}":"${readystatemsg}"`)
        client.user.setActivity("LC RECORDS",{type: "PLAYING"})
    })
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
    
        const command = interaction.client.commands.get(interaction.commandName);
    
        if (!command) return;
    
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    });
    client.login(token1)
}
if(bits.Bot2['IsEnabled?'] === true){
const MutiAPI = require('./_mutiAPi')
const {Client, Collection} = require('discord.js')
const client = new Client({intents: ["GuildMessages", "Guilds", "GuildMessageTyping"]})
const commands = new Collection();

// Main Bot
client.commands = new Collection();
const commandsPath = path.join(__dirname, './commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}

client.on("ready", ()=>{
    console.log( `"${botusername}":"${readystatemsg}"`)
	client.user.setActivity("LC RECORDS",{type: "PLAYING"})
})
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
client.login(token2)
    
}
if(bits.Bot3['IsEnabled?'] === true){
const {Client, Collection} = require('discord.js')
const client = new Client({intents: ["GuildMessages", "Guilds", "GuildMessageTyping"]})
const commands = new Collection();

// Main Bot
client.commands = new Collection();
const commandsPath = path.join(__dirname, './commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}

client.on("ready", ()=>{
    console.log( `"${botusername}":"${readystatemsg}"`)
	client.user.setActivity("LC RECORDS",{type: "PLAYING"})
})
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
client.login(token3)
    
}