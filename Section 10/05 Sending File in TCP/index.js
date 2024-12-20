import { createReadStream, createWriteStream } from "node:fs";
import net from "node:net"


const clientList = []
const server = net.createServer((socket)=>{
    // const writeStream = createWriteStream("C:\\Users\\DESKTOP\\Desktop\\myNEw.mp3");
    // socket.pipe(writeStream);

    
    clientList.push(socket);
    console.log("connection establised",clientList.length);

    let currSocket = socket;
    socket.on('data',(chunk)=>{
        console.log("getting data")
        clientList.forEach((SocketGroup)=>{
            if(SocketGroup!=currSocket){
                console.log("sending data ")
                SocketGroup.write(chunk)
            }
        });
        // socket.write(data)
        // writeStream.write(data)
        // console.log("Getting data from client"); 
    })
    
    socket.on("close",()=>{
        console.log("Server closed")
    })
    
    
    // reading from server and sending to client
    // process.stdin.on("data",(input)=>{
    //     if(input.toString().trim()==="send"){
    //         console.log("writing")
    //         const readStream = createReadStream("D:\\Shubham Songs PlayList\\z-test\\Aamir Khan, Alka Yagnik - Aati Kya Khandala.mp3");
    //         readStream.pipe(socket);
    //     }
    //     else{
    //         console.log(input.toString());
    //     }
    // });
});


server.listen(4000,()=>{
    console.log("Server listining at port 4000")
})