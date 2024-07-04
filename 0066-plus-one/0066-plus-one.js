/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {


    x = String(BigInt(digits.join(''))+1n).split('').map(Number)
    // a= []
    // x.forEach((e)=>{
    //     a.push(Number(e))
    // })

    return x

    // console.log(String().split())
};