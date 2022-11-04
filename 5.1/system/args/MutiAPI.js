const pingMultiAPI = ()=>{
    const request = require('request')
    const fs = require('fs')
    if(!fs.existsSync('./req_logs/')){
        fs.mkdirSync('./req_logs/')
    }
    request({
        url:"https://putinproductions.000webhostapp.com/api/MutiApi/MutiAPI.json",
        json: true
      }, (err,res,body)=>{
        if(err){
          throw err
        }else{
            fs.writeFileSync('./req_logs/sys.request-Muti.json', `{\n"sys.runtime.loggedName": "${res.body.Name}",\n"sys.request.Port": "200",\n"sys.server.return":"${res.rawHeaders}"}`);
            console.log(`Shell: `)
            console.log(res.body);
        }
      })
}
module.exports = {
    pingMultiAPI
}