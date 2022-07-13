/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    while (nums.length >1) {
        let tester = nums.shift()
    let place = nums.indexOf(tester)
    if (place!==-1) {
        nums.splice(place,1)
    } else {
        return tester
    }
    }
    return nums[0]
};