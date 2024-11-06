import fs from "fs/promises"

const a= await fs.readFile("Data.txt");

const data= a.toString("base64");

console.log(a);
fs.writeFile("newData.txt",data);