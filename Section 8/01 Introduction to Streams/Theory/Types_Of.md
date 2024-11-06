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

We can use transform stream as for hacking in which we can show something and when the download than other thing is downloaded
