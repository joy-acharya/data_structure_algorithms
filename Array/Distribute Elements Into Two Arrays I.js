/*
  3069. Distribute Elements Into Two Arrays I
  LeetCode Link: https://leetcode.com/problems/distribute-elements-into-two-arrays-i
  T.C: O(n)
  S.C: O(n)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    const arr1 = [nums[0]];
    const arr2 = [nums[1]];

    for (let i = 2; i < nums.length; i++) {
        // Cache references to last elements for cleaner syntax and faster access
        const val = nums[i];
        if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
            arr1.push(val);
        } else {
            arr2.push(val);
        }
    }

    return arr1.concat(arr2);
};
