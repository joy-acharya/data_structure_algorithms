/*
  3904. Smallest Stable Index II
  LeetCode link: https://leetcode.com/problems/smallest-stable-index-ii
  T.C: O(n)
  S.C: O(n)
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    const n = nums.length;
    
    // Allocate only 1 array for suffix minimums
    const suffixMin = new Int32Array(n);
    suffixMin[n - 1] = nums[n - 1];

    // Pass 1 (Right to Left): Fill suffix minimums
    for (let i = n - 2; i >= 0; i--) {
        const item = nums[i];
        const prevMin = suffixMin[i + 1];
        suffixMin[i] = item < prevMin ? item : prevMin;
    }

    // Pass 2 (Left to Right): Calculate running max & check condition immediately
    let runningMax = nums[0];
    for (let i = 0; i < n; i++) {
        const item = nums[i];
        if (item > runningMax) runningMax = item;

        if (runningMax - suffixMin[i] <= k) {
            return i; // Early exit as soon as the first valid index is found
        }
    }

    return -1;
};
