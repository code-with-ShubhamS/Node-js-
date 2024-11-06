import fs from 'fs/promises'


// Inside fileHandle we have fd so we didnot use fd to read or write data
const fileHandle = await fs.open("Demo.txt","w+")

const data = await fileHandle.read(Buffer.alloc(10))
console.log(data)

const writeData= await fileHandle.write("hiii")
console.log(writeData)