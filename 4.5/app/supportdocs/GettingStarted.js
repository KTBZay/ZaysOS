const Bandlab = require('../httpreq/bl/version.json')
const Youtube = require('../httpreq/yt/version.json')
const Twitter = require('../httpreq/tr/version.json')
const Discord = require('../httpreq/dc/version.json')
const Soundcloud = require('../httpreq/sc/version.json')
const Instagram = require('../httpreq/ig/version.json')
console.log( 
    
`
# Welcome to Zays New Opreating Server!\n
This system can ping websites, and run discord bots!\n
\n
\n
Current versions of the website pingers: \n
Bandlab: {\n
Current = ${Bandlab.version},\n
past = ${undefined} OR ${null}
\n}
\n
Youtube: {\n
    Current = ${Youtube.version},\n
    past = ${undefined} OR ${null}
    \n}
    \n
Twitter: {\n
    Current = ${Twitter.version},\n
    past = ${undefined} OR ${null}
    \n}
    \n
Discord: {\n
    Current = ${Discord.version},\n
    past = ${undefined} OR ${null}
    \n}
    \n
SoundCloud: {\n
    Current = ${Soundcloud.version},\n
    past = ${undefined} OR ${null}
    \n}
    \n
Instagram: {\n
    Current = ${Instagram.version},\n
    past = ${undefined} OR ${null}
    \n}
    \n

    # END Of CURRENT PINGERS #\n
Current services ran by others:\n
Discord\n
https\n
nodejs
`
)