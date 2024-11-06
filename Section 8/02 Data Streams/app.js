import {spawn} from "child_process"
import { createWriteStream } from "fs";

const childProcess =  spawn("node",["child.js"]);
const writeStream= createWriteStream("myVideo.mp4")


childProcess.stdin.pipe(writeStream)

// Here what we are doing is we are connecting our child process to parent process so they can communicate with each other and sharing data 