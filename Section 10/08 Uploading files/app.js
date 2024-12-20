import { createWriteStream } from "node:fs";
import net from "node:net"

// we are not using this code in production level because their are many libraries to build the server like express js . which is more efficient and reliable but this is core concept which is used by many library to build server. 

const server = net.createServer((socket)=>{
    let writeStream = createWriteStream("myData.txt");

    socket.on("data",(chunk)=>{
        writeStream.write(chunk.toString())
        if(/WebKitFormBoundary.+--/.test(chunk.toString())){
            socket.end("HTTP \n\n got data....");
        }
        
    })

    socket.on("close",()=>{
        console.log("client disconnected...");
    })

    socket.on("error",()=>{
        console.log("erorr");
    })
})

server.listen(4000,()=>{
    console.log("Server listning on port 4000");
})