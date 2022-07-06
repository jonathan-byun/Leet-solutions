/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <=1) {
        return strs[0]
    }
    for (let i=0; i<strs[0].length;i++) {
        for (let o=1;o<strs.length;o++) {
            if (strs[0][i]!==strs[o][i]) {
                if (i===0) {
                    return ""
                }
                const split = strs[0].slice(0,i)
                return split
            }
        }
    }
    return strs[0]
};