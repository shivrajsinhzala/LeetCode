/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split("");
        t = t.split("");
        // console.log(s.sort());
        // console.log("___________");
        // console.log(t.sort());
        if(s.sort().join() == t.sort().join()){
            return true
        }

        return false
};