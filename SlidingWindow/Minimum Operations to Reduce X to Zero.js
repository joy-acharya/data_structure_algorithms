/*
  1658. Minimum Operations to Reduce X to Zero
  LeetCode Link: https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero
  T.C: O(n)
  S.C: O(1)
*/


/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const totalSum = nums.reduce((acc, val) => acc + val, 0);
    const target = totalSum - x;

    // Edge cases
    if (target === 0) return nums.length; // Remove all elements
    if (target < 0) return -1;            // x is larger than array sum

    let currentSum = 0;
    let maxLen = -1;
    let left = 0;

    // Sliding window
    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];

        // Shrink window if sum exceeds target
        while (currentSum > target && left <= right) {
            currentSum -= nums[left];
            left++;
        }

        // Record maximum subarray length when exact target is met
        if (currentSum === target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    return maxLen === -1 ? -1 : nums.length - maxLen;
};
