
var MinStack = function() {
    this.stack=[];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const holder = this.stack.pop();
    this.stack.push(holder);
    return holder;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.stack[0]
    for (let i=0;i<this.stack.length;i++) {
        min = this.stack[i] < min ? this.stack[i] : min;
    }
    return min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */