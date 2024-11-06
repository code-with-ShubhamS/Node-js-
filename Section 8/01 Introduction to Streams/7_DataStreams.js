import {spawn} from "child_process"

// stdin property is an inbuilt application programming interface of the process module which listens for the user input. The stdin property of the process object is a Readable Stream. It uses on() function to listen for the event.

// stdin = fileDescriptor 0
// stdout = fileDescriptor 1
// stderr = fileDescriptor 2

// These are data command we are mainly using these command for taking the input or showing o/p from terminal using process 

// process.stdin.on("data",(chunk)=>{
//     console.log(chunk.toString())
// })

const childProcess = spawn("cat",["char.md"]);

childProcess.stdout.on("data",(chunk)=>{
    console.log(chunk.toString())
})

// Using these thing we can create a new process and send the data from parent to child process and in child process we use stdout or stdin to input the data from parent to child.

