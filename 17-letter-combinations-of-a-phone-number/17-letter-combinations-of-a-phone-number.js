/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length===0) {
        return []
    }
    let phone = {
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    }
    const result=[];
    function makeNumber(string, index) {
        if (index === digits.length) {
            result.push(string)
            return;
        }
        for (let x of phone[digits[index]]) {
            makeNumber(string+x, index+1);
        }
    }
    makeNumber('', 0);
    return result;
};