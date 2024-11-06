// Opening file in different modes 
// read= r
// write= w
// append = a

import fs from "fs"

// const fd = fs.openSync("No.txt","w");
// fs.writeSync(fd,"New Data")


const fd= fs.openSync("No.txt","w")

fs.write(fd,"😊",(err,writtenBytes,str)=>{
    console.log(err)
    console.log(writtenBytes)
    console.log(str)
})
