const onStartUp = ()=>{
    const { pingMainAPI } = require('../args/MainAPI');
    const { pingMultiAPI } = require('../args/MutiAPI');
    const { pingRuntimer } = require('../args/runtime');
    const { Checker } = require('../discord/_BotObjs');
    const { C } = require('../../configuration');
    const fs = require('fs');
    const path = require('node:path')
    if(!fs.existsSync('./logs/')){
        fs.mkdirSync('./logs/')
    }
    fs.writeFileSync('./logs/sys.startup.json', `{"sys.user.loggedin": "${C.user.Username}", "sys.user.usesPort":"${C.user.Port}","sys.type":"BOT"}`)
    console.log('Shell: Created startup log....');
    console.log('Shell: Checking apis...')
    setTimeout(() => {
            pingMainAPI();
            pingMultiAPI();
            pingRuntimer()
          console.log("Shell: Checking discord services")
          setTimeout(() => {
            Checker.checkAll()
    }, 2000);
    },2000);
};
module.exports = {
    onStartUp
}

