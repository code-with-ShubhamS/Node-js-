import fs from 'fs'
import { pipeline } from 'stream';

const readStream= fs.createReadStream("C:\\Users\\DESKTOP\\Desktop\\VID20241008141310.mp4",{highWaterMark:1*1024*1024});

const writeStream = fs.createWriteStream("myVideo.mp4",{highWaterMark:1*1024*1024});

// readStream.on("data",(chunks)=>{
   let isEmpty = writeStream.write(chunks);

//    if(!isEmpty){
//      readStream.pause()
//    }
// })

// writeStream.on("drain",()=>{
//  readStream.resume()
// })

// readStream.pipe(writeStream);
// readStream.unpipe(writeStream)

setTimeout(() => { 
    writeStream.destroy("Khatam") // generating an error 
}, 800);

pipeline(readStream,writeStream,(err)=>{
    console.log(err)
})

// PIPE => This method help user write the data using backpresure .But the problem is we  cannot handle error inside it . So our Node js system crashed if we cannot handled the error.Than we use pipeline methof