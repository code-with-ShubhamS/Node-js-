import fs from 'fs'

const readStream= fs.createReadStream("mp4",{highWaterMark:1*1024*1024})

const writeStream= fs.createWriteStream("new.mp4");
//suppose we have very lage mp4 file

readStream.on("data",(chunk)=>{
    writeStream.write(chunk,{});
})


// NOTE: when we are writing data using writeStream than first it will clean all the data and than write .By default it will write 16kb data

// here when we read data and than write that data using write stream than it is fast from writeFileSync but it take to much memory in ram.This is the wrong method to write file  

// Q Why the size is incresing 
// Because as we know the reading take less time for read where writing take more time so when we write that data it will store remaing data into ram thats why we get an spike in memory
