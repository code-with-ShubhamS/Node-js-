import express from "express"
// adding route to specific middleware 
const app = express()
app.use(express.json()); //using this we can get data in req.body we are actualy parsing the data in json 

// app.use("/login",(req,res,next)=>{
//     console.log("This is first middleware")
//     res.send("This is first middleware")
// })  
// Here when we send request on /login/name is will execute /login middleware because app.use compare like this /login/name.startWith("/login")
// app.use("/login/name",(req,res,next)=>{
//     console.log("This is Second middleware");
//     res.send("This is Second middleware");
// })

app.use("/login",(req,res,next)=>{
    if(req.body.password==="123"){
        next()
    }else{
        res.send("Invalid...")
    }
})
//post req must be requires if we want data in req.body inside app.use("/login")
app.post("/login",(req,res)=>{
    res.send("Yess you are allowed")
})
app.get("/",(req,res)=>{
    res.send("This is homr route..")
})

app.listen(4000,()=>{
    console.log("Running...")
})