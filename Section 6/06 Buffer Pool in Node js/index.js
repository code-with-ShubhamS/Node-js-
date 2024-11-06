import {Buffer} from 'buffer'

// conditon for allocUnSafe to use buffer pool
// buffer size should be less than buffer.poolsize >>>1 

Buffer.poolsize = 1024*64 //(8kb) create whenver we run our node js program.

//The allocUnsafe behind the schene use the same ArrayBufer until the size of one Buffer is greater than the buffer.poolsize >>> 1 

const a= Buffer.alloc(4)
const b= Buffer.allocUnsafe(4)
const c= Buffer.allocUnsafe(4)

console.log(a.buffer.byteLength)
console.log(b.buffer.byteLength)
console.log(c.buffer.byteLength)
