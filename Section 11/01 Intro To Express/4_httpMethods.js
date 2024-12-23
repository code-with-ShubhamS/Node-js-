import express from "express";
const app = express();


// Their is very slight differenc between url and route 
// Url is what we are getting in req.url(mainly from user) and routing means a home route ,login route which we provide in get,post,put method
// Using url we can send req and that req is handled using route in our code

// A global middleware which parse data on every req and than send it to in req body so other router can directly use them.
app.use((req,res,next)=>{
    console.log(req.headers)
    req.on("data",(chunk)=>{
        req.body = JSON.parse(chunk);
        next()
    })
})
// Note that app.use is not a middleware it is a way to set middleware globally but the function which is running inside it is called middleware

// app.use(express.json()) inbuild function to parse json like upper code
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

// Run when any of the upper req didn't send res . It is global level route 
app.use("*",(req,res)=>{
    res.send("Invalid path.....")
})

app.listen(4000, () => {
    console.log("Listening on port 4000");
  });
  