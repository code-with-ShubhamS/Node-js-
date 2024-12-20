import { createReadStream, read} from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net"
// if we are using content length header and defining exact length of content than we didnot need to end the socket it will automatically end the socket.Where if you are using socket.write than you should end that socket manually. 

const server = net.createServer(async (socket)=>{
    const fileHandler = await open("C:\\Users\\DESKTOP\\Desktop\\VID20241008141310.mp4");
    const {size} = await fileHandler.stat();
    const readStream = fileHandler.createReadStream();

    // const readStream = createReadStream("No.txt");

    socket.write("HTTP\n");
    socket.write("Access-Control-Allow-Origin:*\n"); //allowing all the api to fetch
    socket.write("Access-Control-Expose-Headers:*\n"); //Allowing all headers

    // socket.write("content-type: text/txt; charset=utf-8\n"); 
    // //if i write content type video than browser show the video in their page 
    socket.write("content-type: video/mp4\n")

    socket.write(`content-length:${size}\n`); //Defining length of content . if the length is greater it will disconnect from client and if smaller than it will continously ask for more data.

    socket.write("Content-Disposition : attachment ; filename:Shubham.pdf") //some file are not download automaticaly like video file if we want to download those than we use content disposition

    socket.write("HEllo : There\n\n") //faltu ka header
    



    readStream.pipe(socket); //it automatically handle backpressure which is given by browser

    readStream.on("resume",()=>{
        console.log("Resumed")
    })
    readStream.on("pause",()=>{
        console.log("Paused")
    })


    socket.on("end",()=>{
        console.log("ended ")
    })

    socket.on("close",()=>{
        console.log("client disconnect..")
    })
    socket.on("error",()=>{
        console.log("erorr")
    })
})

server.listen(4000,()=>{
    console.log("Server listening on port 4000");
})