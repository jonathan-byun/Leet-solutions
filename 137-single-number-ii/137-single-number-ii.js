/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    while (nums.length>1) {
        let tester = nums.shift();
        let place1 = nums.indexOf(tester);
        if (place1 !== -1) {
            nums.splice(place1,1);
            nums.splice(nums.indexOf(tester),1);
        } else {
            return tester
        }
    }
    return  nums[0]
};