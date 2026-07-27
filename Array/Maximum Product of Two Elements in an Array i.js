/*
  1464. Maximum Product of Two Elements in an Array
  LeetCode Link: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array
  T.C: O(n)
  S.C: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let f = 0, s = 0;

    const n = nums.length;

    for(let i = 0; i < n; i++) {
        const num = nums[i];

        if(num >= f) {
            s = f;
            f = num;
        } else if(num >= s) {
            s = num
        }
    }

    return (f - 1) * (s - 1)
};
