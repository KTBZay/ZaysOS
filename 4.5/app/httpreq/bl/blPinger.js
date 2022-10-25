
module.exports = {
    BLPINGER: () => {
        const https = require('node:https');
        const fs = require('node:fs')
        https.get('https://bandlab.com/', (res) => {
          console.log('statusCode:', res.statusCode);
          console.log('headers:', res.headers);
        
          res.on('data', (d) => {
            process.stdout.write(d);
          });
          if(!fs.existsSync('./pinglogs/bl')){
            fs.mkdirSync('./pinglogs/bl/', {recursive: true})
          }
          fs.writeFileSync(`./pinglogs/bl/bandlab.headers.log`, `${res.rawHeaders}`);
          fs.writeFileSync(`./pinglogs/bl/bandlab.status.log`, `${res.statusMessage} \n ${res.statusCode}`);
          fs.writeFileSync(`./pinglogs/bl/bandlab.HttpVersion.log`, `${res.httpVersion}`);
        }).on('error', (e) => {
          console.error(e);
        });
        
}

}