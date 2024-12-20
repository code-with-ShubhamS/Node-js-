import { createReadStream } from "fs";
import http from "http";
import fs from "fs/promises";

const server = http.createServer(async(req, res) => {

  let path = "./public";

  if(req.url==="/favicon.ico"){
    return;
  }
if(req.url!="/"){
    let readStream; 
    const stat = await fs.stat(`${path}${req.url}`);
    console.log(stat.isFile())
    if(stat.isFile()){
      console.log(path,"is file")
     readStream = createReadStream(`${path}${req.url}`);
     readStream.pipe(res);
     readStream.on("error",()=>{
      res.end("Not Found");
  })
    }else{
      path = path + req.url;
      console.log(path,"folder");
      showAllFiles(req,res,`${path}`)
      // const fileLists = await fs.readdir("./public");
        // res.end("it is folder");
    }
}
else{
  // path = path + req.url;
  showAllFiles(req,res,path)
  }
});


async function showAllFiles(req,res,path){
  // console.log(path,"ShowAllfiles")
  const fileLists = await fs.readdir(path);
  let files="";
fileLists.forEach((file)=>{
  files += `<a href="${req.url=="/" ? "" : req.url}/${file}">${file}</a><br/>`
})

res.end(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<h3>My index.html file </h3>
  ${files}
</body>
</html>
  `)
}

server.listen(4000, "0.0.0.0", () => {
  console.log("Server listning on poty 4000");
});


