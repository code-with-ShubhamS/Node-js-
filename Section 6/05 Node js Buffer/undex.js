import {Buffer} from 'buffer'
// const buf= new Uint8Array(4)
// console.log(buf);

 const emptyBuffer = new ArrayBuffer(4);
//  const nodeBuffer= new Buffer(4) // //It is depricated

const nodeBuffer = Buffer.alloc(4) //create an buffer 
const nodebuff= Buffer.from(emptyBuffer) //it take an buffer as an parameter

console.log(nodebuff)
console.log(nodeBuffer.buffer)


const buffer1= Buffer.alloc(4000); //it will ocuupy a space in the memory and put 0 on every index
const buffer2= Buffer.allocUnsafe(10000) //it will randomly occupy space and if their is any data than it will show it if we print that data but it is fast
console.log(buffer2.toString())