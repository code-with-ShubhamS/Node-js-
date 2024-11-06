import fs from 'fs'

const stream =  fs.createReadStream("char.md",{highWaterMark:4})

stream.on("data",(chunk)=>{
    // console.log(chunk)
});

stream.on("readable",()=>{
    console.log(stream.readableLength);
    console.log(stream.read(2))
    console.log(stream.readableLength)
})

//here what we are doing is 
// this readable function run when we read data .
// inside this function we have stream.read(2) which read only 2 byte data and we are getting 4 byte of data 
//when the size reach to its maximum than it will not read the data