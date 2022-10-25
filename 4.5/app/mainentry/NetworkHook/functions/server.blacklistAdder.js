const net = require('net');
const addtoBlocklist = (ip,type) => {
  const Blocklist = new net.BlockList();
  Blocklist.addAddress(ip,type)
}
module.exports = {
    addtoBlocklist
}