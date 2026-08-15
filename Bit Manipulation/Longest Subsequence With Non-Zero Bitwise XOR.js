/*
  3702. Longest Subsequence With Non-Zero Bitwise XOR
  LeetCode Link: https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor
  T.C: O(n)
  S.C: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let result = 0;
    let n = nums.length;
    let isZero = true;

    for(let i = 0; i < n; i++) {
        result ^= nums[i]; 
        if(nums[i] != 0) isZero = false;
    }

    if(isZero) return 0;

    return result == 0 ? n - 1 : n;
};
