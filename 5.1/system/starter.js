const { C } = require("../configuration");
const { Prompt } = require("./prompt/_Prompt");

if(C.enableMain === false){
Prompt("./","windows.api-information", "info")
}else{
    const { onStartDocs } = require("../windows.api");
const { onStartUp } = require("./main/_Catcher");
onStartDocs()
console.log('[HOST:CONNECTION]: Starting connection')
setTimeout(() => {
    onStartUp()    
}, 10000);
}