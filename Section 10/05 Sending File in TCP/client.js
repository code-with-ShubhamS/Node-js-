import { createReadStream, createWriteStream } from "node:fs";
import net from "node:net";

// pipe use to send data over network and write use to write data in local
const socket = net.createConnection({ port: 4000, host: "192.168.1.2" });

process.stdin.on("data", (input) => {
  if (input.toString().trim() === "send") {
    console.log("writing");
    const readStream = createReadStream(
      "D:\\Shubham Songs PlayList\\z-test\\Abhijeet, Jatin-Lalit - Chaand Taare.mp3"
    );
    readStream.pipe(socket);
  } else {
    console.log("YOur info is :", input.toString());
  }
});

const writeStream = createWriteStream("Clinet3song.mp3");
socket.on("data", (chunk) => {
  console.log("Writing data >>>>> ");
  writeStream.write(chunk);
});


socket.on("end", () => {
  console.log("Ended......");
});
// Writing data which is comming from server
// const writeStream = createWriteStream("song.mp3")
// socket.pipe(writeStream);

// sending data to server
// const readStream = createReadStream("song.mp3")
// readStream.pipe(socket)

socket.on("close", () => {
  socket.end();
  console.log("client disconnected..");
});

socket.on("error", () => {
  console.log("client side error..");
});
