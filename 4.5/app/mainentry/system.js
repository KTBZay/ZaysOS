const { Server } = require("../../module.list");
const { UserSettings } = require("../userconfig/main.cfg"); 
const { DiscordBot } = require("./discordbot/app");
const { Deploy } = require("./discordbot/deploy");
const {newServer} = require("./NetworkHook/functions/server.CreateServer")
function Start (){
    newServer()
    const checker = require('../httpreq/checker/checker');
    const app = require('./discordbot/app'); 
    Server.PendFile('./discordbot/app.js');
}
Start()