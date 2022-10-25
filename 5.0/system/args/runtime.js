const pingRuntimer = ()=>{
    const request = require('request')
        const fs = require('fs')
    if(!fs.existsSync('./req_logs/')){
        fs.mkdirSync('./req_logs/')
    }
    request({
        url:"https://putinproductions.000webhostapp.com/api/5.0/runtime.json",
        json: true
      }, (err,res,body)=>{
        if(err){
          throw err
        }else{
            fs.writeFileSync('./req_logs/sys.request-Time.json', `{"sys.runtime.loggedName": "${res.body.Name}", "sys.request.Port": "200","sys.server.return":"${res.rawHeaders}"}`);
            console.log(`Shell: `)
            console.log(res.body);
        }
      })
}
module.exports = {
    pingRuntimer
}