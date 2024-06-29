/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    nums = nums.sort();
    let freq = {};
    nums.forEach(num => {
        if (freq[num]) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    });
    let sortedFreq = Object.keys(freq).sort((a , b)=>freq[b] - freq[a]);
    console.log(sortedFreq);

    return sortedFreq.slice(0,k);
};