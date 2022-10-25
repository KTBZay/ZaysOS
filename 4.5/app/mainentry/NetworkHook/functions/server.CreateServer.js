const net = require('net');
const newServer = () => {
    const server = new net.createServer((err)=>{
        if (err) throw err;
        console.log('Created server')
    })
}
module.exports = {
    newServer
}