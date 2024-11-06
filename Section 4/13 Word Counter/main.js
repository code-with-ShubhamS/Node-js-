// import fs from 'fs/promises'
// const fileData=await fs.readFile('./file-1.txt',"ascii")
// // console.log(fileData)
// let obj={}
// // const wordsData=fileData.split(" ");
// const wordsData = fileData.split(/[^a-zA-Z]+/).filter((w) => w);
// for (let index = 0; index < wordsData.length; index++) {
//     const element = wordsData[index];
//     let count=0;
//     for (let j = 0; j < wordsData.length; j++) {
//         const item = wordsData[j];
//         if(element==item){
//             count++;
//         }
//     }
//    let newobj={[element]:count}
//     obj={...obj,...newobj}
// }

// console.log(obj)

import { readFile } from "node:fs/promises";
const pathName = process.argv[2];
const searchText = process.argv[3]
const fileContent = await readFile(pathName, "utf-8");
const wordCountConteiner = {};
const wordsData = fileContent.split(/[^a-zA-Z]+/).filter((w) => w);

if(searchText){
    let firstAdd = 0;
    wordsData.forEach((word) => {
        if(searchText == word && firstAdd==0){
            wordCountConteiner[searchText] = 1;
            firstAdd = 1;
        }
        else if(searchText == word) {
          wordCountConteiner[searchText] += 1;  
        }
      })
      if(firstAdd==0){
        console.log("Word Not Found");
      }
}

else {
    wordsData.map((word) => {
      if (word in wordCountConteiner) {
        wordCountConteiner[word] += 1;
      } else {
        wordCountConteiner[word] = 1;
      }
    });
}
console.log(wordCountConteiner);



