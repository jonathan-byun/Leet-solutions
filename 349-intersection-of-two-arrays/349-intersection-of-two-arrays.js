/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let selectedArray;
    let otherArray;
    const answerArray = []
    if (nums1.length > nums2.length) {
        selectedArray = nums1
        otherArray = nums2
    } else {
        selectedArray = nums2
        otherArray = nums1
    }
    for (let i=0; i<selectedArray.length;i++) {
        let selected = selectedArray[i]
        if (otherArray.indexOf(selected)!==-1 && answerArray.indexOf(selected) ===-1) {
            answerArray.push(selected);
        }
    }
    return answerArray
};