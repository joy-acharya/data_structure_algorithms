/*
  3513. Number of Unique XOR Triplets I
  LeetCode link: https://leetcode.com/problems/number-of-unique-xor-triplets-i
  T.C: O(log2n)
  S.C : O(1)
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const n = nums.length;

    if( n === 1 || n === 2) return n;

    let ans = 1;

    while(ans <= n) {
        ans *= 2;
    }

    return ans;
};
