const {ServiceWorker} = require('./app/serviceWorker');
const { TOKEN1, TOKEN2, ID1, ID2, PORT } = require('./server.config');
/// this allows other addons to ran on this system line bds

const profile = {
    id: ID1,
    token: TOKEN1,
    name: " ", /// Set this to a name
    enabled: false
}
const DiscordBot = new ServiceWorker();
DiscordBot.Create(TOKEN1,PORT);
DiscordBot.Deployer(TOKEN1, ID1)
