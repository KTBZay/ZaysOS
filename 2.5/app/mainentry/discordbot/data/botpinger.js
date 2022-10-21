const https = require('node:https');
const fs = require('node:fs')
https.get('https://discord.com/api/v10/applications/1032708037191942254', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('Service is online!');
    let body = ""
  res.on("data", (data) => {
            console.log(data)
});
if(!fs.existsSync('./logs/server/serverBot/')){
    fs.mkdirSync('./logs/server/serverBot/', {recursive: true})
  }
  fs.writeFileSync(`./logs/server/serverBot/Getheaders.log`, `${res.rawHeaders}`);
  fs.writeFileSync(`./logs/server/serverBot/Getstatus.log`, `${res.statusMessage} \n ${res.statusCode}`);
  fs.writeFileSync(`./logs/server/serverBot/GetHttpVersion.log`, `${res.httpVersion}`);
}).on('error', (e) => {
  console.error(e);
});