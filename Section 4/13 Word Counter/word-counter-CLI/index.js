#!/usr/bin/env node
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