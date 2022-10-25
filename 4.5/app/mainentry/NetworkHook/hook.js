const { addtoBlocklist } = require("./functions/server.blacklistAdder");
const { newServer } = require("./functions/server.CreateServer");

module.exports = {
    Net: {
        Createserver: newServer,
        Blocklist: addtoBlocklist
    }
}