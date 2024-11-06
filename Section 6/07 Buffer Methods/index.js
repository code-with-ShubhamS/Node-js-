import {Buffer} from "buffer"


const nodeBuffer = Buffer.from("Hello SHubham");
const nodeBuffer2= Buffer.alloc(8);

// nodeBuffer2[0] = 97;
// nodeBuffer2[6] = 99;

// console.log(nodeBuffer2)
// console.log(nodeBuffer2.toString()) //ToString doesnot read the empty binary data

nodeBuffer2.write("abcd","hex")
console.log(nodeBuffer2.toString("hex"))
console.log(nodeBuffer2.toJSON())

