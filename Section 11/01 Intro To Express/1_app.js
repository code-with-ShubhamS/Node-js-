import express from "express";
// express is a function

const app = express();
// app.disable('x-powerd-by') we are disbling header which show express in their value
app.get("/",(req,res)=>{
    res.send("Hello ✌️");
    // res.end("Hello ✌️")
})

// behind the secne app.listen use http.createServer() means it use http to create server  
app.listen(4000,()=>{
    console.log("App is listening ")
})

// res.end() Header
// connection:keep-alive
// content-length:5
// date:Fri, 20 Dec 2024 06:09:55 GMT
// keep-alive:timeout=5
// x-powered-by:Express

// res.send() Header
// connection:keep-alive
// content-length:5
// content-type:text/html; charset=utf-8  Main differenc 
// date:Fri, 20 Dec 2024 06:11:46 GMT
// etag:W/"5-9/+ei3uy4Jtwk1pdeF4MxdnQq/A"
// keep-alive:timeout=5
// x-powered-by:Express

