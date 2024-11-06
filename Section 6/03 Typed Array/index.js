// const buffer = new ArrayBuffer(4) //making a array buffer of 4 bytes

// const int8Array = new Int8Array(buffer)
// const int16Array = new Int16Array(buffer)
// const int32Array = new Int32Array(buffer)

// console.log(int8Array) //every index take 1byte
// console.log(int16Array) //every index take 2 byte
// console.log(int32Array) //every index take 4 byte

// two ways to create a typed array
// const buffer = new ArrayBuffer(4)
// const int8Array = new Int8Array(4)

// int8Array[0]=0b1010;
// console.log(int8Array[0])

const buffer = new ArrayBuffer(4,{maxByteLength:16})
buffer.resize(8)
console.log(buffer)
