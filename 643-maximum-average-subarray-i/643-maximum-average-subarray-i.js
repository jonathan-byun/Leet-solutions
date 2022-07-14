/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (k===1) {
        return Math.max(...nums)
    }
    let avg;
    for (let i=0;i<=nums.length-k;i++) {
        let sum=nums[i]
        for (let o=i+1;o<i+k;o++){
            sum +=nums[o]
        }
        let newAvg = sum/k;
        if (i===0) {
            avg = newAvg
        }
        if (newAvg > avg) {
            avg = newAvg;
        }
    }
    return avg
};