import net from "node:net"

const socket = net.createConnection({port:4000,host:"192.168.1.5"})

process.stdin.on("data",(input)=>{
    socket.write(input);
})

socket.on("close",()=>{
    socket.end();
    console.log("client disconnected..");
})

socket.on("data",(data)=>{
    console.log("server data: ",data.toString());
})

socket.on("error",()=>{
    console.log("client side error..");
})
