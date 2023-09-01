/*
  26. Remove Duplicates from Sorted Array
  Leet code link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i - 1] != nums[i]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};

