function BuiltInServer(enabled = Boolean, Name, port){
    if(enabled === true){
        console.log("[Shell_Admin]: Starting localhost server..")
        const express = require('express')
        const { ejs } = require('ejs')
        const fs = require('fs')
        const app = express();
        app.get('/', (res,req)=>{
            req.write('Welcome')
        })

        app.listen(port,(err)=>{
            if(err){
                throw err
            }else{
                fs.writeFileSync('./logs/sys.SERVER_DATA.json', `{\n"sys.user.loggedin": "Localhost",\n "sys.user.usesPort":"200",\n"sys.type":"VM-SERVER"}`)
                console.log(`[Shell-VM]: Server started on \n ${port} \n you can ping the site at \n www.localhost:${port}`)
            }
        })
    }
}
module.exports = {
BuiltInServer
}