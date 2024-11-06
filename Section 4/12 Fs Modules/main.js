import fs from 'fs/promises';
// import fs from 'fs';

let i=0;
const timer=setInterval(()=>{
    console.log("hiii");
    i++;
    if(i===15){
        clearInterval(timer)
    }
},5)
// const content = fs.readFileSync('./index.html','utf-8'); 
//second parameter is a encoding feild if we are not write it than we it will return the buffer and than we can convert that buffer into string

// NOTE: IN READ-FILE-SYNC IT WILL BLOCK THE MAIN THREAD WHICH MEAN SETINTERVAL CODE IS NOT EXECUTED UNTIL MY FILE IS READ

// console.log(content)


// fs.readFile('./index.html',(err,data)=>{ it work as asyncronously 
//   console.log(data.toString())
// })


const promis=await fs.readFile('./index.html','utf-8');
console.log(promis);

// if we read heavy file than Other program is executed where if we use readFileSync than other code will not executed until my file is readed 


// ALWAYS USE FS PROMISES TO READ THE FILE 