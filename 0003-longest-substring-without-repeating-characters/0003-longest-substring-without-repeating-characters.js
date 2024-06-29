/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // let sArray = s.split("");

    let start = 0;
    let end = 0;
    let sub = []
    let max = 0;

    while(end < s.length){
        if(!sub.includes(s[end])){
            sub.push(s[end]);
            end++
            max = Math.max(max , sub.length)
        }
        else{
        
            // sub.pop(s[start]);
            
            // for(let x = end; x >=0 ; x++){
            //     sub.pop(s[x]);
            // }
            sub.shift();
            start++
        } 
        console.log(sub,max)
    }
    return max
};