import net from "node:net"

const server = net.createServer()

//In Tcp we do Three way hand shake sync,ack
server.on("connection",(socket)=>{
    console.log("Connection established...")

    socket.on("data",(data)=>{
        console.log(data.toString());
        socket.write(" HTTP\n\n hii there resposnse from server ");
        // socket.end();
         // we are sending req in the form of HTTP by writing http in text and after sending the req we can ending it so the response is send completely 
    })

    socket.on("close",()=>{
        console.log(socket.remoteAddress,"Client Disconnected...");
    })

    socket.on("error",()=>{
        console.log("Server error ")
    })
    // console.log(socket.address())
    // console.log(socket.remoteAddress)
    // console.log(socket.remotePort)
    // console.log(socket.remoteFamily)
})


server.listen(4999,"0.0.0.0",()=>{
    console.log(`Server listening on port 4999`)
})


//as we know browser only know http req which is based on TCP 
// we can write or read on socket because it is a duplex stream 