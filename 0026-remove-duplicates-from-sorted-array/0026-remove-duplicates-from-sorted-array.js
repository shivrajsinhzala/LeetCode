/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // num =  nums.filter((el , i)=> nums.indexOf(el) === i)
    // return num.length

    if(nums.length < 1) return nums

    check = 0;

    for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[i-1]){
        nums[check] = nums[i]
        check++
    }
    }

    return check

};