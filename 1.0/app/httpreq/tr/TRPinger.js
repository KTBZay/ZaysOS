module.exports = {
    TRPINGER: () => {
        const https = require('node:https');
        const fs = require('node:fs')
        https.get('https:/twitter.com/', (res) => {
          console.log('statusCode:', res.statusCode);
          console.log('headers:', res.headers);
        
          res.on('data', (d) => {
            process.stdout.write(d);
          });
          if(!fs.existsSync('./pinglogs/tr')){
            fs.mkdirSync('./pinglogs/tr/', {recursive: true})
          }
          fs.writeFileSync(`./pinglogs/tr/twitter.headers.log`, `${res.rawHeaders}`);
          fs.writeFileSync(`./pinglogs/tr/twitter.status.log`, `${res.statusMessage} \n ${res.statusCode}`);
          fs.writeFileSync(`./pinglogs/tr/twitter.HttpVersion.log`, `${res.httpVersion}`);
        }).on('error', (e) => {
          console.error(e);
        });
        
}

}