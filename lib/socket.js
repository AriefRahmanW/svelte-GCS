const socket = require("socket.io")

let io

function listen(server){

    io = socket(server)

    io.on("connection", (socket) => {

        console.log("new connection ", socket.id)

    })

    return io

}

function emit(topic, data){

    io.sockets.emit(topic, data)

}

module.exports = {

    listen,

    emit

}