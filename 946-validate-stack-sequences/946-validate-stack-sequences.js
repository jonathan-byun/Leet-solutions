/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack =[];
    for (let i=0;i<pushed.length; i++) {
        stack.push(pushed[i])
        while (stack.length > 0 && stack[stack.length-1] === popped[0]) {
            popped.shift();
            stack.pop();
        }
    }
    if (popped.length === 0) {
        return true;
    }
    return false;
};