const fs = require('node:fs');
function onStartDocs(){
const welcome = fs.readFileSync('./docs/Welcome-To-5.0', {encoding: 'UTF-8'});
const howto = fs.readFileSync('./docs/How-to-5.0', {encoding: 'UTF-8'});
console.log(welcome);
console.log(howto)
try {
    const user_data = require('./windows.api-information.json')
    const loadedmsg = console.log(`[Windows:Reponse]: ${user_data.Userame} data was found and was loaded`)
    fs.writeFileSync('./windows.api-accpeted.json', `%7BUsername%3A%20%24%7Buser_data.Username%7D%7D`)
} catch (error) {
 console.log('[Windows:Request]: Couldnt be satisfied')   
}
}
module.exports = {
    onStartDocs
}