module.exports = {
    DCPINGER: () => {
        const https = require('node:https');
        const fs = require('node:fs')
        https.get('https://discord.com/', (res) => {
          console.log('statusCode:', res.statusCode);
          console.log('headers:', res.headers);
        
          res.on('data', (d) => {
            process.stdout.write(d);
          });
          if(!fs.existsSync('./pinglogs/dc')){
            fs.mkdirSync('./pinglogs/dc/', {recursive: true})
          }
          fs.writeFileSync(`./pinglogs/dc/discord.headers.log`, `${res.rawHeaders}`);
          fs.writeFileSync(`./pinglogs/dc/discord.status.log`, `${res.statusMessage} \n ${res.statusCode}`);
          fs.writeFileSync(`./pinglogs/dc/discord.HttpVersion.log`, `${res.httpVersion}`);
        }).on('error', (e) => {
          console.error(e);
        });
        
}

}