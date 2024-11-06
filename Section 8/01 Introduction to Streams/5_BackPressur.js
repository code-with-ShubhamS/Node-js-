// BackPressur is the best way to write the file data. It fire when the writeStream is empty

// So writeStream collect all the data which is comming from readStream and store that data into ram if writeStream get some time so they can write their data into the ssd and again we write the in it

import fs from "fs"

const writeStream= fs.createWriteStream("100A.txt",{highWaterMark:4});

// console.log(writeStream.writableHighWaterMark)
let i=0;
function writeData(){
    while(i<100){
        console.log(writeStream.writableLength) 
        let isBufferEmpty = writeStream.write("B");
        i++;
        if(!isBufferEmpty){
            break;
        }
    }
}


writeStream.on("drain",()=>{
    writeData()
})

writeStream.end("a") //always closed the file whenever using createWriteStream because it firstly open that file and than write the content inside it. Also if we want to send data in one time than we didnot use createWriteStream()

writeData()
