const num=[2,4,5,6,1,3,5,6];

// let multiply=1;
let ans=0
// for (let index = num.length-1; index >=0; index--) {
//     let element = num[index];
//     element = element*multiply;
//     ans=ans+element;
//     multiply=multiply*10;
// }
// console.log(ans)

for (let index = 0; index < num.length; index++) {
    const element = num[index];
    ans = ans+(element * Math.pow(10,index))
}
console.log(ans)