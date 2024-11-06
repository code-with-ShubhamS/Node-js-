import fs from 'fs'

const fd = fs.openSync("No.txt")

const newBuffer = Buffer.alloc(10) //Define The size of buffer

fs.read(fd,{buffer:newBuffer,
    position:2
},(err,bytesRead,buffer)=>{
    console.log(err)
    console.log(bytesRead)
    console.log(buffer.toString())
})

