import express from "express"
const app = express()
import {open} from "fs/promises"
// Serving all file in the browser which is inside public directory and we can directly access those file by adding path of that file in url and we can directly see the content of that file 
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.send("Home route")
})

app.get("/test",async (req,res)=>{
    const fileHandler = await open("vid.mp4")
    const readStream = fileHandler.createReadStream()
    const stats = await fileHandler.stat()
    res.header("content-type","video/mp4")
    // res.header("Content-length",stats.size) pipe automatically send size so we dont need of content-length
    res.header("accept-ranges", "bytes") //using this header we can increase the range of video 
    readStream.pipe(res);

    // OR
    // res.sendFile(`${import.meta.dirname}/vid.mp4`) second way to send file
})


app.get('/api',(req,res)=>{
    // res.header("Content-Type","application/json")
    // res.end(JSON.stringify({"API":"Value"}))
    res.status(302).json({"API":"Value"})
})
app.listen(4000,()=>{
    console.log("Running....")
});