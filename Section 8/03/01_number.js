import fs, { createWriteStream } from 'fs'

console.time()

// TIME :686 sec
// for (let index = 0; index <= 5000; index++) {
//     if(index==0){
//         fs.writeFileSync("No.txt",`${index} `)
//     }else{
//         fs.appendFileSync("No.txt",`${index} `)
//         console.log("running...")
//     }
// }

// TIME: 18.882ms
const writeStream= createWriteStream("No.txt");
for (let index = 0; index <= 5000; index++) {
    writeStream.write(`${index} `) 
}
writeStream.end()

writeStream.on("finish",()=>{
    console.timeEnd()
})

