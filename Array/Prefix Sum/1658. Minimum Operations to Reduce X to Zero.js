/*
  1658. Minimum Operations to Reduce X to Zero
  LeetCode Link: https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero
  T.C: O(n)
  S.C: O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let sum = 0;
    let map = new Map();
    map.set(0, -1);

    let n = nums.length;

    for(let i = 0; i < n; i++) {
        sum += nums[i];

        map.set(sum, i);
    }

    let target = sum - x;
    let L = -1;

    if(sum < target) return -1;

    sum = 0;

    for(let i = 0; i < n; i++) {
        sum += nums[i];

        let t = sum - target;

        if(map.has(t)) {
            L = Math.max(L, i - map.get(t));
        }
    }

    return L == -1 ? -1 : n - L;
};
