/*
  1464. Maximum Product of Two Elements in an Array
  Leet Code Link : https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
  T.C : O(logn)
  S.C : O(1);
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b)=>b-a);
    
    return (nums[0] - 1) * (nums[1] - 1);
};
