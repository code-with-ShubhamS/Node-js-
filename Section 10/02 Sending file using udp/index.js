import dgram from "node:dgram"
import { createWriteStream } from "node:fs"

const socket = dgram.createSocket("udp4")

const writeStream = createWriteStream("demo.pdf");

socket.on("message",async (message,remoteInfo)=>{

    if(message.toString()==="END"){
        socket.send("Completed ",remoteInfo.port,remoteInfo.address);
       
    }else{
        writeStream.write(message)
    }   
})


socket.bind({port:4000})