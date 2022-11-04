function Prompt (path,name,type){
const prompt = require('prompt');
const fs= require('fs')
prompt.start();
prompt.get(["Name", "Username", "Project_Purpose", "isSysFile"], (err,result)=>{
    if(err){
        console.log('[Shell:Database]: Data not accepted');
        throw err;
    }else{
        console.log('[Shell:Database]: Data accepted')
        fs.writeFileSync(`${path}/${name}.json`, `{\n "Name": "${result.Name}",\n"Username": "${result.Username}",\n"Project_Purpose": "${result.Project_Purpose}",\n"SystemFile?": "${result.isSysFile}",\n"Request-Type": "${type}"}`)
    }
})
}
module.exports = {
    Prompt
}