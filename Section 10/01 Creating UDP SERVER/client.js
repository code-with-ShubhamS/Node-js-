import dgram from "node:dgram"
// This is a client side 

const socket = dgram.createSocket("udp4")
socket.on("message",(msg,serverInfo)=>{
    console.log(msg.toString())
    socket.close()
})

socket.send("Hii client sending request  ",4000,"192.168.1.2")

// If by mistake i write wrong port or ip address than also that time it will not throw error
