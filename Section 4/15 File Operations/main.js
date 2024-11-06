import {readFile,copyFile,cp,rename,unlink,rmdir,rm,writeFile,mkdir} from 'node:fs/promises'
import {watch} from 'fs'


// rename is used to move and rename the file

// rename("rename.png","file.png")
// rename("file.png","C:\\Users\\DESKTOP\\Desktop")
// copyFile("wordpress1.png","copyFile.png");
// cp("./src","C:\\Users\\DESKTOP\\Desktop",{recursive:true}) use to copy the directory
// unlink('file.png') used to delete the file


// rmdir("src") remove only empty directory
// rm("src",{recursive:true}) remove directory which is not empty
// writeFile("style.css","") create a empty new file 

// mkdir("test")


watch("file.txt",async (type)=>{
    if(type=="change"){
        console.log(await readFile("file.txt","utf-8"))
    }
})