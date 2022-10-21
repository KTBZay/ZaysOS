const https = require('node:https');
const fs = require('node:fs')
https.get('https://putinproductions.000webhostapp.com/Main.json', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('Service is online!');
    let body = ""
  res.on("data", (data) => {
            console.log(data)
});
if(!fs.existsSync('./logs/server')){
    fs.mkdirSync('./logs/server/', {recursive: true})
  }
  fs.writeFileSync(`./logs/server/server.Getheaders.log`, `${res.rawHeaders}`);
  fs.writeFileSync(`./logs/server/server.Getstatus.log`, `${res.statusMessage} \n ${res.statusCode}`);
  fs.writeFileSync(`./logs/server/server.GetHttpVersion.log`, `${res.httpVersion}`);
}).on('error', (e) => {
  console.error(e);
});