// const b = loadModule('./random.js');
// console.log(b);
const {sum} = loadModule('./sum.js');

console.log(sum(1,2,3,4,5,6));

function loadModule(path){
    const fs= require('fs');
    const fileData = fs.readFileSync(path).toString();

   return (function (send) {
           eval(fileData); //eval execute the given string 
           return send;
        })({});
}
