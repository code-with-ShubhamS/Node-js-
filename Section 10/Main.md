
# NETWORKING WITH CORE NODE JS 

Node js provide us various networking modules which we can use to make server or client side.

```javascript
import dgram from "node:dgram";
import net from "node:net";
import http from "node:http";
import https from "node:https";
```

## CREATING UDP SERVER
A UDP server in Node.js can be created using the dgram module, which provides support for the UDP (User Datagram Protocol).

`NOTE => Browser only work on HTTP so they didnot accept UDP request.`

### Server side code using UDP module
```javascript
import dgram from "node:dgram"

const socket = dgram.createSocket("udp4")

// run when we get data from server 
socket.on("message",(message,remoteInfo)=>{
    console.log(message.toString())

// remoteinfo is a information of client like their address,port address etc.
console.log(remoteInfo)

socket.send("Message from server ",remoteInfo.port,remoteInfo.address)
})

socket.on('listening', () => {
  // socket.address() containing server information. 
    const address = socket.address();
    console.log(`server listening${address.address}:${address.port}`);
  });

//to run the server
socket.bind({port:4000}) 

 ```

### Client Side code using UDP module
```javascript 
import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");

// If server send data to client than this code will execute and print data.
socket.on("message",(msg,serverInfo)=>{
    console.log(msg.toString())
    socket.close()
})

// Sending data to Server
socket.send("Hii client sending request  ",4000,"192.168.1.2")

```
`NOTE => If by mistake you write wrong port or ip address than it doesn't throw error because it didn't make sure that the data is sucessfully sended to destination. Thats why it is not used to send files.`

## SENDING FILE USING UDP
### Client Side Code

```javascript
import dgram from "node:dgram"
import { createReadStream } from "node:fs";

// Reading data 
const readStream = createReadStream("C:\\Users\\DESKTOP\\Downloads\\Data.pdf",{highWaterMark:1000});

const socket = dgram.createSocket("udp4");

// Sending Data to Server
readStream.on("data",(chunk)=>{
    socket.send(chunk,4000,"192.168.1.5")
})

// closing the socket when we are getting message from server
socket.on("message",(msg,info)=>{
    console.log(msg.toString())
    socket.close()
})

// sending end message when all data sended completly.
 readStream.on("end",()=>{
    socket.send("END",4000,"192.168.1.5",()=>{
        console.log("Message Sent")
    })
})


```

### Server side code
In this code when client got connected than client instantly sending data to server and server writing(storing) data in demo.pdf.

```javascript
import dgram from "node:dgram"
import { createWriteStream } from "node:fs"

// udp4 describing ipv4 address
const socket = dgram.createSocket("udp4")

const writeStream = createWriteStream("demo.pdf");

//run when client send data 
socket.on("message",async (message,remoteInfo)=>{

    if(message.toString()==="END"){
      // sending this message to client so they can close the socket
        socket.send("Completed ",remoteInfo.port,remoteInfo.address);
       
    }else{
        writeStream.write(message)
    }   
})


socket.bind({port:4000}) 
```

## You must be thinking that what is socket? <br>
 ` A socket is a software endpoint that enables communication between two devices over a network.It is a combination of IP address and a port number which uniquely identifies a connection point in a network. Socket is a combination of request and response body.`
### How Sockets Work:

- A socket binds to a specific IP address and port number.
- The client sends a request to the server's socket.
- The server processes the request and sends a response back through the socket.


### Real-Life Examples of Sockets:
- Web Browsing: When you visit a website, your browser creates a socket to the server's port 80 (HTTP) or port 443 (HTTPS).
- Chat Applications: Sockets enable real-time communication between users.
- Online Gaming: UDP sockets are used for fast, low-latency communication.
- File Transfer: FTP and other protocols use sockets(TCP) for transferring files.


## CREATING TCP SERVER 
TCP stands for Transmission Control Protocol. It is one of the main protocols of the Internet Protocol (IP) suite, which governs how data is transmitted over networks. TCP is used for reliable, ordered, and error-checked delivery of a stream of data between applications running on hosts communicating via an IP network.

TCP is commonly used for applications where reliable and ordered data delivery is crucial, such as:

- Web Browsing (HTTP/HTTPS)
- Email (SMTP, POP, IMAP)
- File Transfer (FTP)
- Remote Access (SSH, Telnet)


### Client side code
```javascript 
import net from "node:net"

// Create a TCP client
const socket = new net.Socket(); // net.socket return socket
// const client = net.createConnection({port:4999,host:"192.168.1.5"}) first way to connect with server



// Second way to Connect with the server
socket.connect(4999, "192.168.1.5", () => {
    console.log(`Connected to server at 192.168.1.5  4999`);

    // Send a message to the server
    const message = 'Hello, Server!';
    socket.write(message);
    console.log(`Sent to server: ${message}`);
});


// Handle data which we received from the server
const writeStream = createWriteStream("Clinet3song.mp3");
socket.on('data', (data) => {
    console.log(`Received from server: ${data.toString()}`);
writeStream.write(chunk);

    // Optionally close the client after receiving a response
    // client.end();   
});

// Handle the client closing
socket.on('close', () => {
    console.log('Connection closed.');
});


// Handle errors
socket.on('error', (err) => {
    console.error(`Connection error: ${err.message}`);
});

```
### Server side code

```javascript
import net from "node:net"

const server = net.createServer()

//In Tcp we do Three way hand shake (sync,ack)
server.on("connection",(socket)=>{
    console.log("Connection established...")

    socket.on("data",(data)=>{
        console.log(data.toString());
        socket.write(" HTTP\n\n hii there resposnse from server ");
        socket.end();
         // we are sending req in the form of HTTP by writing http in text and after sending the req we can ending it so the response is send completely 
    })

    socket.on("close",()=>{
        console.log(socket.remoteAddress,"Client Disconnected...");
    })

    socket.on("error",()=>{
        console.log("Server error ")
    })


// reading from server and sending to client 
// In this code we are taking input from terminal and if we write send in terminal than we are sending a file
    process.stdin.on("data",(input)=>{
        if(input.toString().trim()==="send"){
            console.log("writing")
            const readStream = createReadStream("D:\\Shubham Songs PlayList\\z-test\\Aamir Khan, Alka Yagnik - Aati Kya Khandala.mp3");
            readStream.pipe(socket);
        }
        else{
            console.log(input.toString());
        }
    });

    // console.log(socket.address())
    // console.log(socket.remoteAddress)
    // console.log(socket.remotePort)
    // console.log(socket.remoteFamily)
})

 

server.listen(4999,"0.0.0.0",()=>{
    console.log(`Server listening on port 4999`)
})

// Using this code we can take input from the user from terminal 
process.stdin.on("data",(input)=>{
 console.log(input)
})

//as we know browser only know http req which is based on TCP 
// we can write or read on socket because it is a duplex stream 
```

## Creating HTTP Server using TCP
As you know that HTTP is based on TCP .So using TCP we can create a http server.


```javascript
import { createReadStream, read} from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net"
// if we are using content length header and defining exact length of content than we didnot need to end the socket it will automatically end the socket.Where if you are using socket.write than you should end that socket manually. 

const server = net.createServer(async (socket)=>{
    const fileHandler = await open("C:\\Users\\DESKTOP\\Desktop\\VID20241008141310.mp4");
    const {size} = await fileHandler.stat();
    const readStream = fileHandler.createReadStream();

  
    //First we can write HTTP in header So browser can understand This is http server
    socket.write("HTTP\n");
    socket.write("Access-Control-Allow-Origin:*\n"); //allowing all the api to fetch
    socket.write("Access-Control-Expose-Headers:*\n"); //Allowing all headers

    // socket.write("content-type: text/txt; charset=utf-8\n"); 
    //if i write content type video than browser show the video in their page 
    socket.write("content-type: video/mp4\n")

    socket.write(`content-length:${size}\n`); //Defining length of content . if the length is greater it will disconnect from client and if smaller than it will continously ask for more data and stuck in infinity loop.

    socket.write("Content-Disposition : attachment ; filename:Shubham.pdf") //some file are not download automaticaly like video file if we want to download those than we use content disposition

    socket.write("HEllo : There\n\n") //We can set any header but this is bad practice
    



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

```

### When we use fetch we use await two times why ???

 ```
Data come from server in two parts headers and actual data 
first fetch is for header and second one if for actual data.
```
```javascript

const response = await fetch("http://192.168.1.2:4000/")
console.log("response")

const data = await response.text(); //when we get all data after that we are printing on screen 
console.log(data);


const textDecoder = new TextDecoder();
for await (const chunk of response.body){ //so here it will not wait for all data .as fast he get data he will print it.It is usefull when  data coming from server with some delay. like chatgpt 
    console.log(chunk)
}
```

``` 
NOTE = > we are not using this code in production level because their are many libraries to build the server like express js . which is more efficient and reliable but this is core concept which is used by many library to build server. 
```

### Creating HTTP Server using HTTP module

```javascript
import http from "http"

const server = http.createServer();

//If i use connection method that create a TCP server Which i don't need in this case
server.on("connection",(socket)=>{
    socket.on("data",(data)=>{
        console.log("got data on socket")
        console.log(data)
    })
})



// when we didnot end the server that means the connection is alive Between server and client
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
```
```
req and response is the part of socket  because socket is a duplex stream thats why we are getting data from it or we can write on it.
socket.on("data") is req and  socket.write("") is res
```

### Creating Client Using HTTP 
``` javascript
import http from "node:http";

// by default client req is send to local host at port 80
const clientRequest = http.request({method:"POST"})

// writing on server
clientRequest.write("Hello this message from client..")

// run when server send data to client
clientRequest.on("response",(response)=>{
   response.on("data",(data)=>{
    console.log(data.toString())
    clientRequest.end()
   })
});
```

## ANATONY OF HTTP REQUEST AND RESPONSE (How they look like)
 
 #### Format of http request
``` <Method> <Path> <HTTP Version>
<Header-Name-1>: <Header-Value-1>
<Header-Name-2>: <Header-Value-2>
...

<Optional-Body>
```

 #### Format of http response
```
<HTTP Version> <Status Code> <Reason Phrase>
<Header-Name-1>: <Header-Value-1>
<Header-Name-2>: <Header-Value-2>
...

<Optional-Body>
```
 #### Sample of http get request
``` 
GET /index.html HTTP/1.1 => Request Line
Host: www.example.com
User-Agent: Mozilla/5.0
Accept-Language: en-US
```
 #### Sample of http post request
``` 
POST /submit-form HTTP/1.1
Host: www.example.com
Content-Type: application/json
Content-Length: 27

{
  "name": "John Doe",
  "age": 30
}
```
 #### Sample of http response
```
 HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1354

<html>
  <head><title>Example</title></head>
  <body>Hello, world!</body>
</html>

```

#### Extra Knowledge
```
Note that if you are sending file than use stream rather than other file reading modules because in other modules we cannot send data which size is more than 2gb or it also increase the ram uses.

pipe is a dublex stream which means it is a readable and writable both 
used pipe when you are sending file otherwise use write method.
 
Header show the additional informaton which is used by the Browser and it is a metadata about the request or response. Using this we can allow developer to fetch data from our url and many more things.


# socket.write("HTTP\n\n hii");  
HTTP is required Where we are using TCP and browser only know HTTP.
Here the header is seperated using \n\n after that we have actual response data

When you send data using stream then by default 64kib data will be send . it also have  headers info which exceed its limit. then it will add data in acknowledge response(three way handsake) and send it to client
``` 
 Client side redering and server side rendering 

Using server we can send html information but we didn't send it because the load is increased in server also it is not good

Client side
Content is generated in the browser using JavaScript.



Server side
Content is generated on the server and sent to the browser as a fully-rendered HTML file.


| Feature                   | Client-Side Rendering (CSR)                   | Server-Side Rendering (SSR)                     |
|---------------------------|-----------------------------------------------|-----------------------------------------------|
| **Rendering Location**    | Browser (client)                             | Server                                        |
| **Initial Load Speed**    | Slower                                       | Faster                                        |
| **Interactivity**         | High                                         | Limited (can be enhanced with JavaScript)     |
| **SEO**                   | Less SEO-friendly (can improve with pre-rendering) | SEO-friendly                                  |
| **Server Load**           | Low                                          | High                                          |
| **Page Updates**          | Dynamic, no reload needed                    | Requires page reload (or AJAX for partial updates) |
| **Use Cases**             | SPAs, dashboards, interactive apps           | Blogs, e-commerce, static websites            |


# Creating online Storage platform
This is a small project in which we making a single page website where you can Upload video,rename ,delete and open the videos using HTTP module

Technolog used in this project
1. React (client side)
2. Node js ( HTTP module ) for Backend

Github link  => 
