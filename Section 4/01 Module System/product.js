function product(...nums){
    return nums.reduce((acc,curr)=>acc * curr);
}
module.exports = product;
