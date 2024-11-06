import fs from 'fs'

let buffer = Buffer.alloc(16*1024)
console.log(buffer)


console.time()
const fd = fs.openSync("No.txt","w")
for (let index = 0; index < 100000; index++) {
     fs.writeSync(fd,`${index} `) 
}

fs.closeSync(fd)
console.timeEnd()


// 203.689ms