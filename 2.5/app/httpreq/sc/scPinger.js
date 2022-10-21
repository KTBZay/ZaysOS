
module.exports = {
    SCPINGER: () => {
        const https = require('node:https');
        const fs = require('node:fs')
        https.get('https://soundcloud.com/', (res) => {
          console.log('statusCode:', res.statusCode);
          console.log('headers:', res.headers);
        
          res.on('data', (d) => {
            process.stdout.write(d);
          });
          if(!fs.existsSync('./pinglogs/sc/')){
            fs.mkdirSync('./pinglogs/sc/', {recursive: true})
          }
          fs.writeFileSync(`./pinglogs/sc/soundcloud.headers.log`, `${res.rawHeaders}`);
          fs.writeFileSync(`./pinglogs/sc/soundcloud.status.log`, `${res.statusMessage} \n ${res.statusCode}`);
          fs.writeFileSync(`./pinglogs/sc/soundcloud.HttpVersion.log`, `${res.httpVersion}`);
        }).on('error', (e) => {
          console.error(e);
        });
        
}

}