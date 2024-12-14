import dgram from "node:dgram"
import { createReadStream } from "node:fs";



const readStream = createReadStream("C:\\Users\\DESKTOP\\Downloads\\Date Sheet SET-Nov_Dec 2024.pdf",{highWaterMark:1000});

const socket = dgram.createSocket("udp4");

readStream.on("data",(chunk)=>{
    socket.send(chunk,4000,"192.168.1.5")
})

socket.on("message",(msg,info)=>{
    socket.close()
})

 readStream.on("end",()=>{
    socket.send("END",4000,"192.168.1.5",()=>{
        console.log("Message Sent")
    })
})

