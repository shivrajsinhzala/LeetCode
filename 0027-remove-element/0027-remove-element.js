/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

 if(nums.length < 1) return nums

    check = 0;

    for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== val){
        nums[check] = nums[i]
        check++
    }
    }

    return check

};