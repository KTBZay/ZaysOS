const reply = async (
    msg,
    {
        isErr = Boolean}
    
    ) => {
    if(isErr === false){
        console.log(msg);
        console.warn(msg);
    }else if(isErr === true){
        throw msg
    }
}
module.exports = {reply}