/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    while(nums.length>0) {
        if (nums.indexOf(nums[0],1)!==-1) {
            return true;
        } else {
            nums.shift()
        }
    }
    return false
};