const { BuiltInServer } = require("./system/server/app")

const C = {
    enableMain: true,
    user: {
        Username: "John Doe",
        Password: "",
        Port: 200
    },
    bots: {
        token1: "",
        mainbot: false,
        token2: "",
        secbot: false,
        token3: "",
        thirdbot: false
    }
}
BuiltInServer(false,C.user.Username,C.user.Port)
module.exports = {
    C
}