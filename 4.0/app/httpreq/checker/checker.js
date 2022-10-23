const request = require('request')
request({
  url:"https://putinproductions.000webhostapp.com/api/MainApi/MainApi.json",
  json: true
}, (err,res,body)=>{
  if(res.body.version != '1.0.1'){
    throw "Service is out of date"
  }else{
  console.log(res.body)
  }
})