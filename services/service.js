/* var model=require("../models/model") */
var socket=require("socket.io")
function socketIO(server){
    const io=  socket(server)
    io.on('connection',(socket)=>{

    })
}
module.exports={ socketIO}