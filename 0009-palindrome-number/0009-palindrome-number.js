/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    y = x.split("").reverse().join("");

    return x == y
};