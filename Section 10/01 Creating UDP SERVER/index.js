import dgram from "node:dgram"
// Browser only work on HTTP so they didnot accept UDP req
// we are making a UDP server


// Socket is a communication end point which allow users to communicate through a network 
const socket = dgram.createSocket("udp4")

socket.on("message",(message,remoteInfo)=>{
    console.log(message.toString())
    console.log(remoteInfo)
    socket.send("Message from server ",remoteInfo.port,remoteInfo.address)
})
// socket.on('listening', () => {
//     const address = socket.address();
//     console.log(`server listening ${address.address}:${address.port}`);
//   });

socket.bind({port:4000}) //to run the server 