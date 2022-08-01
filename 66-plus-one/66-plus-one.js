/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carried = 0
    let place = 1
    while (digits[digits.length-place]===9) {
        digits[digits.length-place]=0
        place++
        carried++
    }
    if (digits.length-place<0 && carried>0) {
        digits.unshift(1)
    } else {
        digits[digits.length-place] +=1
    }
    return digits
};