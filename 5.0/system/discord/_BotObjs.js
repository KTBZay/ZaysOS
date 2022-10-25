const { C } = require('../../configuration');
const path = require('node:path');
const fs = require('node:fs')
module.exports={
    Checker: {
        checkBotsEnabled: ()=>{
            if(C.bots.mainbot === true){
                console.log("this bot is active")
            }
            if(C.bots.secbot === true){
                console.log("this bot is active")
            }
            if(C.bots.thirdbot === true){
                console.log("this bot is active")
            }
            if(C.bots.mainbot === false){
                console.log("this bot is inactive")
            }
            if(C.bots.secbot === false){
                console.log("this bot is inactive")
            }
            if(C.bots.thirdbot === false){
                console.log("this bot is inactive")
            }
        },
        checkAll: ()=>{
            if(C.bots.mainbot === true){
                console.log("Shell: Started check on Bot 1");
                if(C.bots.token1 === " "){
                    fs.writeFileSync('./logs/sys.tokenerr.json', `{"err_num": 0, "sys.user.usesPort": "200","Message":"Bot must have a token so it can be ran"}`);
                    throw "shell: Bot must have a token so it can be ran"
                }else{
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
                        console.log( `Bot is currently running `)
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
                    client.login(C.bots.token1)

                }
                if(C.bots.secbot === true){
                    console.log("Shell: Started check on Bot 2");
                    if(C.bots.token1 === " "){
                        fs.writeFileSync('./logs/sys.tokenerr.json', `{"err_num": 0, "sys.user.usesPort": "200","Message":"Bot must have a token so it can be ran"}`);
                        throw "shell: Bot must have a token so it can be ran"
                    }else{
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
                            console.log( `Bot is currently running `)
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
                        client.login(C.bots.token2)
    
                    }
                    
                }
                if(C.bots.thirdbot === true){
                    console.log("Shell: Started check on Bot 1");
                    if(C.bots.token3 === " "){
                        fs.writeFileSync('./logs/sys.tokenerr.json', `{"err_num": 0, "sys.user.usesPort": "200","Message":"Bot must have a token so it can be ran"}`);
                        throw "shell: Bot must have a token so it can be ran"
                    }else{
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
                            console.log( `Bot is currently running `)
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
                        client.login(C.bots.token3)
    
                    }
               
                }    
            }
        }   
    }
}
