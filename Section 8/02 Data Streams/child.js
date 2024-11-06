import fs, { createReadStream } from "fs"

const readStream= createReadStream("C:\\Users\\DESKTOP\\Desktop\\VID20241008141310.mp4");

readStream.pipe(process.stdout)