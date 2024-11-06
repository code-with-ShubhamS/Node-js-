import fs from 'fs/promises'

// const fileHandle = await fs.open("01_Promises.js","r+")

// const readStream = fileHandle.createReadStream()
// const writeStream = fileHandle.createWriteStream()



// readStream.setEncoding("utf-8")
// readStream.on("data",(chunk)=>{
//     console.log(chunk)
// })
// console.log(readStream)

const readHandler =  await fs.open("C:\\Users\\DESKTOP\\Desktop\\VID20241008141310.mp4")
const writeHandler = await fs.open("myVideo.mp4","w+")

const readStream = readHandler.createReadStream()
const writeStream = writeHandler.createWriteStream()

readStream.pipe(writeStream);