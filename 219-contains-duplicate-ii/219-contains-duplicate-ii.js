/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let i=0
    while (i<nums.length-1) {
        let j=i+1
        while (j<nums.length) {
            if (nums[i]===nums[j] && Math.abs(i-j)<=k) {
                return true;
            }
            j++
        }
        i++
    }
    return false;
};