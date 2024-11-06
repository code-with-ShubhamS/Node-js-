// import fs from "fs/promises"
import fs from "fs";

// let a = await fs.readFile("C:\\Users\\DESKTOP\\Desktop\\VID20241008141310.mp4");

console.time();

const readStream = fs.createReadStream(
  "C:\\Users\\DESKTOP\\Desktop\\VID20241008141310.mp4",
  { highWaterMark: 1 * 1024 * 1024 }
); //100mb we give size in the form of bytes By default it will read 64kb data


let sizeOfBuffer=0;
//on is a eventEmitter
readStream.on("data", (chunkBuffer) => {
  // console.log(chunkBuffer)
   sizeOfBuffer = sizeOfBuffer+chunkBuffer.byteLength
  console.log("progress...",(sizeOfBuffer/1358005764)*100,"%");
  // console.log(chunkBuffer.byteLength)
  fs.appendFileSync("DEMO.mp4", chunkBuffer);
  // if(chunkBuffer.byteLength < 1 * 1024 * 1024){

  // }
});

readStream.on("end", () => {
  console.timeEnd();
});

// This method is not to good beacuse in this we can see a spike in memory but better than buffer
