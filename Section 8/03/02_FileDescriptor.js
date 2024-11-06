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
