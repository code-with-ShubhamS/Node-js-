import http from "http";
import fs, { open } from "fs/promises";
import { createWriteStream } from "fs";
import mime from "mime-types";
const server = http.createServer(async (req, res) => {
  
  res.setHeader("Access-Control-Allow-Origin","*")
  res.setHeader("Access-Control-Allow-Headers","*")
  res.setHeader("Access-Control-Allow-Methods","*")
  let queryParams = {};
  let [reqUrl, queryString] = req.url.split("?");

  if (reqUrl === "/favicon.ico") {
    res.end("non icon");
    return;
  }

  if(req.method==="GET"){
    if (reqUrl === "/") {
      serveDirectory(reqUrl, res);
    } 
    else {
      try {
        console.log(queryString)
        if(queryString){
        queryString.split("&").forEach((item) => {
          let [key, value] = item.split("=");
          queryParams[key] = value;
        });
      }
        const fileHandle = await open(`./public${decodeURIComponent(reqUrl)}`);
        const stats = await fileHandle.stat();
  
        if (stats.isDirectory()) {
          console.log("yess directory");
          serveDirectory(reqUrl, res,true);
        } else {
          console.log(reqUrl.split("/").at(-1),"fhft")
          console.log(mime.contentType(reqUrl.split("/").at(-1)),"meme type")
          const readStream = fileHandle.createReadStream();
          res.setHeader("Content-Type", mime.contentType(reqUrl.split("/").at(-1)));
          res.setHeader("Content-length", stats.size);
          if (queryParams.action === "download") {
            res.setHeader(
              "Content-Disposition",
              `attachment ; filename="${reqUrl.slice(1)}"`
            );
          }
          readStream.pipe(res);
        }
      } catch (err) {
        console.log("Erorr ocuured ", err.message);
        res.end("Not Found!");
      }
    }
  }else if (req.method==="POST"){
    const writeStream = createWriteStream(`./public/${req.headers.filename}`);
    req.on("data",(data)=>{
      writeStream.write(data)
    })
    req.on("end",()=>{
      writeStream.end()
      res.end("Got your data")
    })
  }else if(req.method==="OPTIONS"){
    res.end("okkk")
  }else if(req.method==="DELETE"){
    fs.rm(`./public/${req.headers.filename}`)
  .then(() => { 
    res.end("file Deleted")
    console.log(`${req.headers.filename} was deleted successfully!`);
  })
  .catch((err) => {
    res.end("error in deleting file..")
    console.error(`Error deleting file: ${err.message}`)
  });

  }else if(req.method ==="PATCH"){
    req.on("data",async (chunk)=>{
    let data=   JSON.parse(chunk.toString())
    let {oldName,newName} = data
    console.log(data)

    try {
    await fs.rename(`./public/${oldName}`,`./public/${newName}`);
      console.log(`File renamed from ${oldName} to ${newName}`);
      res.end("file renamed successfull")
    } catch (error) {
      console.error('Error renaming file:', error.message);
      res.end("Erorr : in renaming a file ")
    }
    })
  }  
});

async function serveDirectory(reqUrl, res) {
  res.setHeader("Content-Type","application/json")
  // console.log(reqUrl)
  // if(isDirectory){
  //     res.write(reqUrl)
  //   }
    const fileLists = await fs.readdir(`./public${reqUrl}`);
  res.end(JSON.stringify(fileLists));
    }

server.listen(80, () => {
  console.log("Server listning on poty 4000");
});

