// More about redeable stream
import fs from 'fs'

const readStream=  fs.createReadStream("data.txt",{highWaterMark:4})

readStream.on("data",(chunks)=>{
    console.log(chunks);
    readStream.destroy(new Error("error from shubhM"))
})

readStream.on("close",()=>{
    console.log("Closed")
})

readStream.on("error",(err)=>{
    console.log(err)
})



readStream.setEncoding("utf-8")



// The closed event emit whenever we stop reading the buffer on the other HAND end event emit when the buffer readed all the data  