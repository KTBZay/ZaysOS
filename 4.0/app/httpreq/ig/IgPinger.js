module.exports = {
    IGPINGER: () => {
        const https = require('node:https');
        const fs = require('node:fs')
        https.get('https://instagram.com/', (res) => {
          console.log('statusCode:', res.statusCode);
          console.log('headers:', res.headers);
        
          res.on('data', (d) => {
            process.stdout.write(d);
          });
          if(!fs.existsSync('./pinglogs/ig')){
            fs.mkdirSync('./pinglogs/ig/', {recursive: true})
          }
          fs.writeFileSync(`./pinglogs/ig/instagram.headers.log`, `${res.rawHeaders}`);
          fs.writeFileSync(`./pinglogs/ig/instagram.status.log`, `${res.statusMessage} \n ${res.statusCode}`);
          fs.writeFileSync(`./pinglogs/ig/instagram.HttpVersion.log`, `${res.httpVersion}`);
        }).on('error', (e) => {
          console.error(e);
        });
        
}

}