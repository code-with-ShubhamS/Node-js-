import http from "http"

const server = http.createServer();

// connection method is used on tcp and if we want to connect with http than we can define that we are sending http response using socket.write("HTTP/n/n")
// server.on("connection",(socket)=>{
//     socket.on("data",(data)=>{
//         console.log("got data on socket")
//         console.log(data)
//     })
// })


//  req and response is the part of socket .How -> socket.on("data") , socket.write("")
// when we didnot end the server that means the connection is alive btw server and client
server.on("request",(req,res)=>{
    req.on("data",(chunk)=>{ //only run when the client is sending some data (inside body)
     console.log(chunk)
     console.log("got data on request")
    })

   res.setHeader("content-length",5)
   res.write("HEllo their ");

})


server.listen(4000,"0.0.0.0",()=>{
    console.log("Listning on 4000")
})