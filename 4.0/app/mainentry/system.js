const { Server } = require("../../module.list");
const { UserSettings } = require("../userconfig/main.cfg");
const { DiscordBot } = require("./discordbot/app");
const { Deploy } = require("./discordbot/deploy");

function DoACheck (){
    console.log(`[System]: Checking Bandlab...`)
    setTimeout(() => {
        Server.CheckBL()
        console.log(`[System]: Checking Youtube...`)
        setTimeout(() => {
            Server.CheckYT()
            console.log(`[System]: Checking Discord...`)
            setTimeout(() => {
                Server.CheckDC()
                console.log(`[System]: Checking SoundCloud...`)
                setTimeout(() => {
                    Server.CheckSC()
                    console.log(`[System]: Checking Twitter...`)
                    setTimeout(() => {
                        Server.CheckTR()
                        console.log(`[System]: Checking Instagram...`)
                        setTimeout(() => {
                            Server.CheckIG()
                            console.log(`[System]: We have checked the websites.....`)
                        }, 4000);
                    }, 4000);
                }, 4000);
            }, 4000);
        }, 4000);
    }, 10000);
}
if(UserSettings.DoACheck === true){
    DoACheck()
    Server.PendFile('./discordbot/app.js')
}else{
    const Guid1 = require('../supportdocs/GettingStarted')
    const Guid2 = require('../supportdocs/UsingService')
}