function sum(...nums){
    return nums.reduce((acc,curr)=>acc + curr);
}
console.log("Sum is call");
module.exports=sum;