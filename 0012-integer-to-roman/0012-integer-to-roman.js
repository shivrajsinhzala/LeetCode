/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const symbol = {
        1: "I", 
        4: "IV", 
        5: "V", 
        9: "IX", 
        10: "X", 
        40: "XL", 
        50: "L", 
        90: "XC", 
        100: "C", 
        400: "CD", 
        500: "D", 
        900: "CM", 
        1000: "M"
    };

    const values = Object.keys(symbol).map(Number).sort((a, b) => b - a);

    let result = "";

    for (let value of values) {
        while (num >= value) {
            result += symbol[value];
            num -= value;
        }
    }

    return result;
}