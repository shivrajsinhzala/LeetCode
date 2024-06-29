/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // // let sArray = s.split("");

    // let start = 0;
    // let end = 0;
    // let sub = []
    // let max = 0;

    // while(end < s.length){
    //     if(!sub.includes(s[end])){
    //         sub.push(s[end]);
    //         end++
    //         max = Math.max(max , sub.length)
    //     }
    //     else{
        
    //         sub.pop(s[start]);
            
    //         for(let x = start; x >=0 ; x++){
    //             sub.pop(s[x]);
    //         }
    //         // sub.shift();
    //         start++
    //     } 
    //     console.log(sub,max)
    // }
    // return max














let start = 0;
    let max = 0;
    let charMap = {}; // HashMap to track characters and their positions
    
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        
        if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1; // Move start to the right of the last occurrence of currentChar
        }
        
        charMap[currentChar] = end; // Update the position of the currentChar
        
        max = Math.max(max, end - start + 1); // Update max length of substring without repeating characters
    }
    
    return max;
















};