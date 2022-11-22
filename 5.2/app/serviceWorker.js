const fs = require('node:fs');
const path = require('node:path');
const { TOKEN1, TOKEN2, other, ID1, PORT } = require('../server.config');
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const app = require('./server/DiscordBotUS/app');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
class ServiceWorker {
    Create =  (token,port) => {
        client.commands = new Collection();
        const commandsPath = path.join(__dirname, './commands');
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);
            if ('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command);
            } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        }
        client.once(Events.ClientReady, c => {
            console.log(`Ready! Logged in as ${c.user.tag}, server is ready on ${port}`);
        });
        client.on(Events.InteractionCreate, interaction => {
            if (!interaction.isChatInputCommand()) return;
            console.log(interaction);
        });
        client.on(Events.InteractionCreate, async interaction => {
            if (!interaction.isChatInputCommand()) return;

            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        })
        app.listen(port, (err)=>{
            if(err) throw err;
            client.login(token)
        })
    }
    Deployer = (token, id)=>{
        const { REST, Routes } = require('discord.js'); 
        const commands = [];
        const commandFiles = fs.readdirSync('./app/commands').filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);
            commands.push(command.data.toJSON());
        }
        const rest = new REST({ version: '10' }).setToken(token);
        (async () => {
            try {
                console.log(`Started refreshing ${commands.length} application (/) commands.`);
                const data = await rest.put(
                    Routes.applicationCommands(id),
                    { body: commands },
                );

                console.log(`Successfully reloaded ${data.length} application (/) commands.`);
            } catch (error) {
                console.error(error);
            }
        })();
    }
}


module.exports = {
    ServiceWorker,
    client
}