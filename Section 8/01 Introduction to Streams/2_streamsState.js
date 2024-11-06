import fs from "fs";

const streamFile = fs.createReadStream("char.md", { highWaterMark: 4 });

// let readCount = 0;
streamFile.on("data", (chunks) => {
//   readCount++;

// if(readCount==1){
//   fs.writeFileSync("data.txt",chunks)
// }
  // console.log(streamFile.bytesRead)
  // console.log(streamFile.readableHighWaterMark)
  if (streamFile.bytesRead == streamFile.readableHighWaterMark) {
    fs.writeFileSync("data.txt", chunks);
  } else {
    fs.appendFileSync("data.txt", chunks);
  }
  streamFile.pause();
  setTimeout(() => {
    streamFile.resume();
  }, 500);
});
