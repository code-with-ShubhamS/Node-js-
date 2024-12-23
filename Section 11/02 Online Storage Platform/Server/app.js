import express, { application } from "express";
import fs, { createReadStream, createWriteStream } from "fs";
import fsPromise, { rename, rm } from "fs/promises";
import { open } from "fs/promises";
import { json } from "stream/consumers";
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

// app.use((req,res,next)=>{
//     const action = req.query.action;
//     if(action==="download"){
//         res.set('Content-Disposition', `attachment`);
//     }
//     express.static("public")(req,res,next);
// });

app.get("/", async (req, res) => {
  fs.readdir("./public", (err, files) => {
    if (err) {
      res.send("Erorr Occured");
    } else {
      res.json(files);
    }
  });
});

app.get("/:fileName", async (req, res) => {
  const action = req.query.action;
  const fileName = req.params.fileName;
  if (action === "download") {
    res.set("Content-Disposition", `attachment; filename=${fileName}`);
  } 
  res.sendFile(`${import.meta.dirname}/public/${fileName}`);
});

app.delete("/:fileName",async (req,res)=>{
    try{
        let a =  await rm(`./public/${req.params.fileName}`)
        res.status(200).send("okk")
    }catch(err){
        res.status(404).send("File doesn't Exist")
    }
})
app.patch("/:newName", async (req, res) => {
    const {oldName} = req.body;
    const {newName} = req.params;
    try{
        await rename(`./public/${oldName}`,`./public/${newName}`)
        res.status(200).send("Sucessfully Name Change");
    }catch(err){
        res.status(404).send("No Such file");
    }  
});

app.post('/',(req,res)=>{
    const writeStream = createWriteStream(`./public/${req.headers.filename}`)
    req.on("data",(data)=>{
      writeStream.write(data)
    })
    req.on("end",()=>{
      writeStream.end()
      res.send("Got your data")
    })
})

app.listen(4000, () => {
  console.log("Listening on 4000");
});
