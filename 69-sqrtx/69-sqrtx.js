/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let answer =0;
    while (answer*answer<x) {
        answer += 1
    }
    if (answer*answer===x) {
        return answer
    }
    return answer-1
};