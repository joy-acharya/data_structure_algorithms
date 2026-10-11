/*
  2778. Sum of Squares of Special Elements 
  LeetCode Link: https://leetcode.com/problems/sum-of-squares-of-special-elements
  My Profile   : https://leetcode.com/u/acharya007/
  T.C          : O(n)
  S.c          : O(1)
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let n = nums.length;

    let result = 0;

    for(let i = 0; i < n; i++) {
        if(n % (i+1) == 0) {
            result += (nums[i] * nums[i]);
        }
    }

    return result;
};
