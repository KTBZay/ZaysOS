module.exports = {
    YTPINGER: () => {
        const https = require('node:https');
        const fs = require('node:fs')
        https.get('https://youtube.com/', (res) => {
          console.log('statusCode:', res.statusCode);
          console.log('headers:', res.headers);
        
          res.on('data', (d) => {
            process.stdout.write(d);
          });
          if(!fs.existsSync('./pinglogs/yt')){
            fs.mkdirSync('./pinglogs/yt/', {recursive: true})
          }
          fs.writeFileSync(`./pinglogs/yt/youtube.headers.log`, `${res.rawHeaders}`);
          fs.writeFileSync(`./pinglogs/yt/youtube.status.log`, `${res.statusMessage} \n ${res.statusCode}`);
          fs.writeFileSync(`./pinglogs/yt/youtube.HttpVersion.log`, `${res.httpVersion}`);
        }).on('error', (e) => {
          console.error(e);
        });
        
}

}