/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;

    let n = s.length;
    let a = "";
    let jump = numRows * 2 - 2;

    for (let row = 0; row < numRows; row++) {
        let i = row;
        while (i < n) {
            a += s[i];
            if (row !== 0 && row !== numRows - 1) {
                let skip = jump - 2 * row;
                let skipAnother = i + skip;
                if (skipAnother < n) {
                    a += s[skipAnother];
                }
            }
            i += jump;
        }
    }
    return a;
};
