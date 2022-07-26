/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let map = nums.slice(0).sort((a, b) => b - a);

    return nums.map((num, i) => {
       if (num === map[0]) return 'Gold Medal';
       else if (num === map[1]) return 'Silver Medal';
       else if (num === map[2]) return 'Bronze Medal';
       else return (map.indexOf(num) + 1).toString();
    });
};