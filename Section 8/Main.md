# Introduction To Streams
So in buffer we have some limitation like we are reading file which is of 10gb and our ram is only 8gb so that create a problem and our node js system is crashed .Than we use streams.

Reading a file and writing that file require ram space.

### Streams

Stream send data in the form of small chunks(Buffer) so ram cannot get to much load and our application doesn't crash.But it take some time to transfer the data.
SO you can see it when you download something it doesn't download very quick


### Problem in node js 
We cannot read the data which is greater than the 2gb in node js
if we read the large data than. Their is a sudden jump in the memmory
When we write a big size file in vs code and play that video than our memory usage increase very high 

# Types of Streams in Node.js

Node.js streams allow you to work with data efficiently by processing it incrementally, without loading the entire data into memory. Streams are particularly useful for handling large datasets or continuous data flows. There are four types of streams in Node.js:

## 1. Readable Streams
Readable streams are used to **read data** from a source, such as reading files or receiving HTTP requests.

## 2. Writable Streams
Writable streams are used to **write data** to a destination, such as writing to a file or sending HTTP responses.

## 3. Duplex Streams
Duplex streams are streams that can **both read and write data**. These are useful for situations like network communication, where you both send and receive data.In this it has one object which have a property of writing and reading

## 4. Transform Streams
Transform streams are a special type of duplex stream where the **output is a transformation of the input**. They modify or process the data as it passes through the stream, such as compressing or encrypting data.
```
We can use transform stream as for hacking in which we can show something and when the download than other thing is downloaded.
```

# Readable Stream States

1. **Initial State**:

   - The stream is newly created. It hasn't started flowing or been paused, so no data is being consumed, and the stream hasn't ended. At this point, no reading action has been taken.
   - **`readableFlowing`: `null`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `false`**

2. **Flowing State**:

   - The stream is actively reading and pushing data automatically to the consumer via the `'data'` event. The stream hasn’t reached the end of its data yet.
   - **`readableFlowing`: `true`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `false`**

3. **Paused State**:

   - The stream is paused, meaning it’s not pushing data automatically.
   - **`readableFlowing`: `false`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `true`**

4. **Ended State**:
   - The stream has consumed all available data and emitted the `'end'` event. No more data will flow, and the stream is considered finished.
   - **`readableFlowing`: `true`**
   - **`readableEnded`: `true`**
   - **`isPaused()`: `false`**

---

### Readable Stream States Comparison Table

| Stream State      | `readableFlowing` | `readableEnded` | `isPaused()`                                    |
| ----------------- | ----------------- | --------------- | ----------------------------------------------------------- |
| **Initial State** | `null`            | `false`         | `false`              |
| **Flowing State** | `true`            | `false`         | `false`              |
| **Paused State**  | `false`           | `false`         | `true`               |
| **Ended State**   | `true`            | `true`          | `false`              |

---

# Writable Stream States in Node.js

This document outlines the different states of writable streams in Node.js and how to check each state.

## 1. Writable (Initial) State

The default state where the stream is ready to accept data.

- **Check**: Use the `writable.writable` property.
  ```js
  console.log(stream.writable); // true if writable, false if not
  ```

## 2. Corked State

In this state, the stream buffers store all written data until it is explicitly uncorked. and than write data in ssd

- **Check**: Use the `writableCorked` property.
  ```js
  console.log(stream.writableCorked); // 0 means not corked, > 0 means corked
  ```

## 3. Ended State

This state occurs when the `end()` method is called and the stream has been signaled to end, meaning no further writes can be made, but it doesn't guarantee that all data has been flushed yet.

- **Check**: `writable.writableEnded`

## 4. Finished State

This state occurs when the `end()` method is called and all data has been flushed to the destination and when the buffer is empty which take some time to send the data to destination.

- **Check**: `writable.writableFinished`

```javascript
// More about redeable stream
import fs from 'fs'

const readStream=  fs.createReadStream("data.txt",{highWaterMark:4})

readStream.on("data",(chunks)=>{
    console.log(chunks);
    readStream.destroy(new Error("error from shubhM"))
})

readStream.on("close",()=>{
    console.log("Closed")
})

readStream.on("error",(err)=>{
    console.log(err)
})

readStream.setEncoding("utf-8")

// The closed event emit whenever we stop reading the buffer on the other HAND end event emit when the buffer readed all the data  
```

```javascript
import fs from 'fs'

const readStream= fs.createReadStream("mp4",{highWaterMark:1*1024*1024})

const writeStream= fs.createWriteStream("new.mp4");
//suppose we have very lage mp4 file

readStream.on("data",(chunk)=>{
    writeStream.write(chunk,{});
})


// NOTE: when we are writing data using writeStream than first it will clean all the data and than write .By default it will write 16kb data

// here when we read data and than write that data using write stream than it is fast from writeFileSync but it take to much memory in ram.This is the wrong method to write file  

// Q Why the size is incresing in memory
// Because as we know the reading take less time for read where writing take more time so when we write that data it will store remaing data into ram thats why we get an spike in memory
//  In this case we want to handle back pressure
```
```
 BackPressur is the best way to write the file data. It fire when the writeStream is empty

 So writeStream collect all the data which is comming from readStream and store that data into ram if writeStream get some time so they can write their data into the ssd and again we write the in it
```
## Handling Back Prasure Without using pipe

```javascript

import fs from 'fs'

const readStream= fs.createReadStream("C:\\Users\\DESKTOP\\Desktop\\VID20241008141310.mp4",{highWaterMark:1*1024*1024});

const writeStream = fs.createWriteStream("myVideo.mp4",{highWaterMark:1*1024*1024});

readStream.on("data",(chunks)=>{
   let isEmpty = writeStream.write(chunks);

   if(!isEmpty){
     readStream.pause()
   }
})

writeStream.on("drain",()=>{
 readStream.resume()
})
```

### Using Pipe
```javascript
import fs from 'fs'
import { pipeline } from 'stream';

const readStream= fs.createReadStream("C:\\Users\\DESKTOP\\Desktop\\VID20241008141310.mp4",{highWaterMark:1*1024*1024});

const writeStream = fs.createWriteStream("myVideo.mp4",{highWaterMark:1*1024*1024});

readStream.pipe(writeStream);
readStream.unpipe(writeStream);

 // generating an error while writing 
setTimeout(() => { 
    writeStream.destroy("Khatam")
}, 800);

// Handling that error
pipeline(readStream,writeStream,(err)=>{
    console.log(err)
})
```


# Data Streams 
```javascript
import {spawn} from "child_process"
// stdin property is an inbuilt application programming interface of the process module which listens for the user input. The stdin property of the process object is a Readable Stream. It uses on() function to listen for the event.

// stdin = fileDescriptor 0
// stdout = fileDescriptor 1
// stderr = fileDescriptor 2

// These are data command we are mainly using these command for taking the input or showing o/p from terminal using process 

process.stdin.on("data",(chunk)=>{
    console.log(chunk.toString())
})

const childProcess = spawn("cat",["char.md"]);

childProcess.stdout.on("data",(chunk)=>{
    console.log(chunk.toString())
})

// Using these thing we can create a new process and send the data from parent to child process and in child process we use stdout or stdin to input the data from parent to child.


```
```
Suppose we have two file parent and child. Parent file creating a child process and child process sending data to parent.
```

```javascript
// Parent
import {spawn} from "child_process"
import { createWriteStream } from "fs";

// Creating a process which open the file
const childProcess =  spawn("node",["child.js"]);
const writeStream= createWriteStream("myVideo.mp4")


childProcess.stdin.pipe(writeStream)

// Here what we are doing is we are connecting our child process to parent process so they can communicate with each other and sharing data 

```
```javascript
// child
\import fs, { createReadStream } from "fs"

const readStream= createReadStream("C:\\Users\\DESKTOP\\Desktop\\VID20241008141310.mp4");

readStream.pipe(process.stdout)

```


## Why Streams are so fast 
1. When we write data using writeFile,writeFileSync,append method than these method first open the file and write data and closed file agian it work as a loop that why these are slow .
2. These Method directly write data in disk 

1. Where Streams open file at once and write all the data and than closed the file when all data is written sucessfully
2. Stream use buffer(Ram) to write the data that why it is very fast 

### File Descriptor
```javascript

import fs from 'fs'

//FD is positive value. This number (fd) uniquely identifies an open file in operating system:

// These fd are already define 
 console.log(process.stdin.fd)
 console.log(process.stdout.fd)
 console.log(process.stderr.fd)


fs.open("No.txt",(err,fd)=>{
    console.log(fd)
})

const fd= fs.openSync("package.json")
console.log(fd,"hi")

```

```javascript

import fs from 'fs/promises'

const readHandler =  await fs.open("C:\\Users\\DESKTOP\\Desktop\\VID20241008141310.mp4")
const writeHandler = await fs.open("myVideo.mp4","w+")

const readStream = readHandler.createReadStream()
const writeStream = writeHandler.createWriteStream()

readStream.pipe(writeStream);
```

```javascript 
import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "video/mp4");
  res.setHeader("Content-Disposition", "attachment; filename=streams.mp4");

  const fileHandle = await fs.open(
    "C:\\Users\\anura\\OneDrive\\Desktop\\streams.mp4"
  );
  const { size } = await fileHandle.stat();
  res.setHeader("Content-Length", size);
  const readStream = fileHandle.createReadStream({
    highWaterMark: 10 * 1024 * 1024,
  });

  readStream.on("data", (chunk) => {
    res.write(chunk);

    readStream.pause();

    setTimeout(() => {
      readStream.resume();
    }, 50);
  });

  readStream.on("end", () => {
    res.end();
  });
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});


```