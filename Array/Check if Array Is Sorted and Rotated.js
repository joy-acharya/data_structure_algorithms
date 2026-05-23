/*
  1752. Check if Array Is Sorted and Rotated
  Leetcode link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/?envType=daily-question&envId=2026-05-23
  T.C : O(n)
  S.C: O(1)
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
   let pick = 0;
   const n = nums.length;
    for(let i = 0; i < n; i++) {
        if(nums[i] > nums[(i+1)%n]) {
            pick++;
        }
    }

    return pick <= 1;
};
