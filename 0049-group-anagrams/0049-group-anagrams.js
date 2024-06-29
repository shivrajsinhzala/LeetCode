/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        function getKey(s){
            return s = s.split("").sort().join();
        }
        let storeKey = {};
        strs.forEach((s)=>{
            // console.log(getKey(s));
           key = getKey(s);
            if(!storeKey[key]){
                storeKey[key] = [s];
            }
            else{
                storeKey[key].push(s);
            }
        })

        // console.log(storeKey);
        return Object.values(storeKey);
};