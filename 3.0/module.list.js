const { BLPINGER } = require("./app/httpreq/bl/blPinger");
const { DCPINGER } = require("./app/httpreq/dc/dcPinger");
const { IGPINGER } = require("./app/httpreq/ig/IgPinger");
const { SCPINGER } = require("./app/httpreq/sc/scPinger");
const { TRPINGER } = require("./app/httpreq/tr/TRPinger");
const { YTPINGER } = require("./app/httpreq/yt/ytPinger");
module.exports = {
    Server: {
        PendFile: function(file,filename){
               const Task_Data = {
                   Name: filename,
                   data: file
               }
               const upload = [{
                   file_name: String,
                   data: String
               }]
               upload.push({file_name: Task_Data.Name, data: Task_Data.data})
           },
           StartFile: function(callback, filename){
               const Task_Data = {
                   Name: filename,
                   data: callback
               }
               console.log(`Starting ${filename}. Please wait.`)
               setTimeout(() => {
                   Task_Data.data()
               }, 2000);
           },
       CheckBL: BLPINGER,
       CheckYT: YTPINGER,
       CheckIG: IGPINGER,
       CheckTR: TRPINGER,
       CheckDC: DCPINGER,
       CheckSC: SCPINGER
        }
}