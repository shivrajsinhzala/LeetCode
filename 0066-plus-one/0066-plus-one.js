/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {


    x = String(BigInt(digits.join(''))+1n).split('')
    a= []
    x.forEach((e)=>{
        a.push(Number(e))
    })

    return a

    // console.log(String().split())
};