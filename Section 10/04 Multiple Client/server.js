import net from "node:net"

const server = net.createServer();

const myClient =[];

function sendMsgToAll(data,currSocket=0){
    console.log(data.toString())
    myClient.forEach((socket)=>{
        if(currSocket!=socket){
            socket.write(data.toString())
        }
    })
}

function sendDataToParticular(data){
    const idx = parseInt(data.toString().split(" ")[0]);
    if(idx > myClient.length-1 || idx.toString() === "NaN"){
        console.log("Invalid index ");
        return;
    }else{
            myClient[idx].write(data.toString().substring(1))
    }
}
// taking input from terminal
process.stdin.on("data",(input)=>{
    sendDataToParticular(input);
    // sendMsgToAll(input)
})


server.on("connection",(socket)=>{
    myClient.push(socket);
    let currSocket = socket;
    console.log(socket.remoteAddress, "connection established...")

    socket.on("data",(data)=>{
    //    sendMsgToAll(data,currSocket);
    sendDataToParticular(data)
    })

    socket.on("error",(err)=>{
        console.log("Erorr Occured")
    })

    socket.on("close",()=>{
        socket.end()
        console.log(socket.remoteAddress,"Connection closed");
    })
})


server.listen(4000,"0.0.0.0",()=>{
    console.log("Server listening on 4000 port")
})