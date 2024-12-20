import { createReadStream } from "fs";
import http from "http";
import fs from "fs";

// Note that if you are sending file than use stream rather than other file reading modules. because in other modules we cannot send data which size is more than 2gb or it also increase the ram uses. 

// This code work same as when we start live server
const server = http.createServer();

server.on("request", (req, res) => {
  let readStream;
console.log(req.url);
  if (req.url == "/") {
    readStream = createReadStream("./public/index.html");
  } else {
    if (fs.existsSync(`./public${req.url}`)) {
      // console.log("File exists.");
      readStream = createReadStream(`./public${req.url}`);
    } else {
      // console.log("File does not exist.");
      res.end("File doesn't exist");
      return;
    }
  }
  readStream.pipe(res);

  // readStream.on("data", (data) => {
  //   res.write(data);
  // });

  readStream.on("end", () => {
    res.end();
  });
});

server.listen(4000, () => {
  console.log("server is running..");
});
