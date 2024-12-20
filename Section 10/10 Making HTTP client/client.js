import http from "node:http";

// by default client req is send to local host at port 80
const clientRequest = http.request({method:"POST"})

clientRequest.write("Hello this message from client..")

clientRequest.on("response",(response)=>{
   response.on("data",(data)=>{
    console.log(data.toString())
    clientRequest.end()
   })
});
