/*
  3471. Find the Largest Almost Missing Integer
  LeetCode Link: https://leetcode.com/problems/find-the-largest-almost-missing-integer
  T.C: O(n)
  S.c: O(1)

  1 <= nums.length <= 50
  0 <= nums[i] <= 50
  1 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    const n = nums.length;
    let map = new Map();

    for(let i = 0; i < n; i++) {
        const num = nums[i];
        map.set(num, (map.get(num) || 0) + 1);
    }

    let result = -1;

    if(k === 1) {
        for(let i = 0; i < n; i++) {
            let num = nums[i];
            if(map.get(num) === 1) {
                result = Math.max(result, num);
            }
        }
    } else if(k === n) {
        for(let i = 0; i < n; i++) {
            let num = nums[i];
            result = Math.max(result, num);
        }
    } else {
        const first = nums[0];
        const last = nums[n-1];

        if(map.get(first) === 1) {
            result = Math.max(result, first);
        }
       
        if(map.get(last) === 1) {
            result = Math.max(result, last);
        }   
    }

    return result;
};
