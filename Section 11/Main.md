# Intro To Express
Express.js is a lightweight and flexible web application framework for Node.js. It simplifies the process of building robust and scalable web applications and APIs by providing a set of features and tools to handle common web development tasks, such as routing, middleware, and HTTP request/response handling. <br>
Express js and next js two most popolar library for making backend.

### When to Use Express.js
- Building RESTful APIs.
- Creating single-page applications (SPAs).
- Developing server-side rendered web applications.
- Building real-time applications like chat or collaborative tools.

```javascript
import express from "express";
// express is a function
const app = express();

// we are disbling header which show express in their value because it is not good practice to show user which type of framework we are using in backend.
app.disable('x-powerd-by');

//  GET Method run when browser or client send get request.  
app.get("/",(req,res)=>{
    res.send("Hello ✌️");
    // res.end("Hello ✌️")
})

// Behind the scene app.listen use http.createServer() means it use http to create server .
app.listen(4000,()=>{
    console.log("App is listening ")
})

```

| res.end() Header     | res.send() Header    | 
|-------------|---------------|
| // connection:keep-aliv | // connection:keep-alive          |
| // content-length:5 | // content-length:5          |
| // date:Fri, 20 Dec 2024 06:09:55 GMT | date:Fri, 20 Dec 2024 06:11:46 GMT    |
| // keep-alive:timeout=5 | keep-alive:timeout=5             |
| // x-powered-by:Express | x-powered-by:Express         |
| -- |// content-type:text/html; charset=utf-8  Main differenc        |


## What is Middleware in Express
Middleware in Node.js refers to functions that execute after request and before sending response to client. These functions have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

<b> There are various types of middleware .. </b>
- Application-level middleware: Bound to an instance of the express object.
- Router-level middleware: Bound to an instance of express.Router().
- Error-handling middleware: Specifically designed to handle errors.
- Built-in middleware: Provided by Express (e.g., express.json(), express.static()).
- Third-party middleware: Installed via npm (e.g., cors, body-parser).


```javascript
import express from "express";
const app = express();

app.get(
  "/",
  (req, res,next) => {
    // It is a Request handler middleware 
    console.log("shubham 1");
    next("err") // calling erorr handler Middleware
    // Whaterver we write after next it will execute after the next middleware is completed their task.
    res.write("shubham 1");
},
  (err,req, res,next) => {
    // Erorr handler middleware run only when we pass something in next function as a error or if we write it at the end of code than any erorr comes from any route it will handle it.
    console.log("Erorr");
    res.end("Erorr 1");
},
// Req handler middleware 
  (req, res,next) => {
    console.log("shubham 2")
    res.write("shubham 2")
  }
);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});


// Here the erorr middle ware only run when we get error on get method(/) because it is inside of get method.
```

Request Handler middleware are those middleware which have two or three parameter. Example in previous code.<br>
Error handler Middleware are those middleware which have exact 4 parameter.

### Different Request Mthods in HTTP
``` javascript 
import express from "express";
const app = express();

app.get("/",(req,res)=>{
    console.log(req.url);
    console.log(req.route.path)
    res.send("Home route")
})

app.post("/login",(req,res)=>{
    console.log(req.body)
    res.send("Home route with post")
})

app.delete("/about",(req,res)=>{
    res.send("Home route with delete")
})

app.put("/",(req,res)=>{
    res.send("Home route with put")
})


// Run when any of the upper req didn't send res . It is global level Middleware 
app.use("*",(req,res)=>{
    res.send("Invalid path.....")
})

app.listen(4000, () => {
    console.log("Listening on port 4000");
  });
```
``` 
Note that app.use is not a middleware it is a way to set middleware globally  the function which is running inside it called middleware.
app.use() adds middleware to the application globally (on every HTTP request).
```
```javascript 
import express from "express";
const app = express();


//Manual function to parse json  for every route.
app.use((req,res,next)=>{
    // It is a application level Middleware
    console.log(req.headers)
    req.on("data",(chunk)=>{
        req.body = JSON.parse(chunk);
        next()
    })
})
// Inbuild function to parse json for every route.
app.use(express.json()) 



app.post("/",(req,res)=>{
    console.log(req.body) // geting data inside req.body in json format
    res.send("Home route with post")
})

app.listen(4000, () => {
    console.log("Listening on port 4000");
  });
```

### Built-in Middleware:
- express.json() for parsing JSON.
- express.static() for serving static files.

### Application-Level Middleware:
``` javascript 
app.use((req, res, next) => {
  console.log('Application-level middleware');
  next();
});
```

``` 
- If you define specific routes with app.get(), app.post(), etc., these are not middleware These handle Http request. Middleware is intended to process requests before they reach these handlers.

- Middleware is executed in the order it is defined in your application.
```

<b>These are Middleware <b>
- The request object (req)
- The response object (res)
- The next function (next) – which passes control to the next middleware in the stack.


## Adding Route - Specific Middleware 
```javascript

import express from "express"
const app = express()
app.use(express.json()); //using this we can get data in req.body we are actualy parsing the data in json 

app.use("/login",(req,res,next)=>{
    console.log("This is first middleware")
    res.send("This is first middleware")
})  
// Here when we send request on /login/name it will execute /login middleware because app.use compare like this /login/name.startWith("/login") not totaly but similarly.

app.use("/login/name",(req,res,next)=>{
    console.log("This is Second middleware");
    res.send("This is Second middleware");
})

// In app.get or app.post compare route or req.url using === (this strict equally operator) 


app.listen(4000, () => {
    console.log("Listening on port 4000");
  });
```

###  Serving Static file
```javascript
// Serving all file in the browser which is inside public directory and we can directly access those file by adding path of that file in url and we can directly see the content of that file in browser.
app.use(express.static("public")); 
```
```javascript
import express from "express"
const app = express()
import {open} from "fs/promises"

app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.send("Home route")
})

app.get("/test",async (req,res)=>{
    //Sending single file to browser but instead to this code we can use res.sendFile()
    const fileHandler = await open("vid.mp4")
    const readStream = fileHandler.createReadStream()
    const stats = await fileHandler.stat()
    res.header("content-type","video/mp4")
    // res.header("Content-length",stats.size) pipe automatically send size so we dont need of content-length
    res.header("accept-ranges", "bytes") //using this header we can increase the range of video 
    readStream.pipe(res);

    // OR

    // Express provide us inbuilt method to send the single file to browser Effectively
    res.sendFile(`${import.meta.dirname}/vid.mp4`) 
})


app.get('/api',(req,res)=>{
    // res.header("Content-Type","application/json")
    // res.end(JSON.stringify({"API":"Value"}))

    // OR

    res.status(208).json({"API":"Value"})
})
app.listen(4000,()=>{
    console.log("Running....")
});
```