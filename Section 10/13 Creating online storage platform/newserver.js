import http from "http";
import fs, { open } from "fs/promises";
import { createReadStream } from "fs";
import mime from "mime-types";
const server = http.createServer(async (req, res) => {
  let queryParams = {};
  let [reqUrl, queryString] = req.url.split("?");

  if (reqUrl == "/style.css") {
    const readStream = createReadStream("./style.css");
    readStream.pipe(res);
    return;
  }
  if (reqUrl === "/favicon.ico") {
    res.end("non icon");
    return;
  }

  if (reqUrl === "/") {
    serveDirectory(reqUrl, res);
  } else {
    try {
      queryString.split("&").forEach((item) => {
        let [key, value] = item.split("=");
        queryParams[key] = value;
      });
      // console.log(queryParams)
      const fileHandle = await open(`./public${decodeURIComponent(reqUrl)}`);
      const stats = await fileHandle.stat();

      if (stats.isDirectory()) {
        serveDirectory(reqUrl, res);
      } else {
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
});

async function serveDirectory(reqUrl, res) {
  const fileLists = await fs.readdir(`./public${reqUrl}`);
  let files = "";


  fileLists.forEach(async (file) => {
      // let filepath = `${
      //   reqUrl == "/" ? `./public` : `./public/${reqUrl}`
      // }/${file}`;
  
      // await fs.stat(filepath, (err, stats) => {
      //   if (err) {
      //     console.error(`Error checking path: ${err.message}`);
      //     return;
      //   }
      //   console.log(stats.isDirectory())
      //   if(stats.isDirectory()){
      //     dir = true;
      //     console.log(stats.isDirectory())
      //   }
      // })
      
      let previewButton = `<a href="${
        reqUrl == "/" ? "" : reqUrl
      }/${file}?action=open"><button class="previewBtn">Preview</button></a>`;
  
      let downloadButton = `<a href="${
        reqUrl == "/" ? "" : reqUrl
      }/${file}?action=download" ><button class="downloadBtn">Download</button></a>`;
  
      files += ` 
      <div class="container">
      <a href="${reqUrl == "/" ? "" : reqUrl}/${file}">${file}</a>
  ${previewButton} ${downloadButton}
      </div>
      <br/>`;
    }
  
  );
  
  
    await res.end(`
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
      <link rel="stylesheet" href="./style.css">
  </head>
  <body>
  <h3>My files</h3>
    ${files} 
  </body>
  </html>
    `);
  
}

server.listen(4000, "0.0.0.0", () => {
  console.log("Server listning on poty 4000");
});

{
  /* <a href="${reqUrl == "/" ? "" : reqUrl */
}
// }/${file}"> <button class="downloadBtn">Download</button>  </a>

//  ${isDirectory === true ? previewButton: ""}
//  ${isDirectory === true ? "":downloadButton}
