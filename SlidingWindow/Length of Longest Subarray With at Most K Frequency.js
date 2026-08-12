/*
  2958. Length of Longest Subarray With at Most K Frequency
  LeetCode Link: https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency
  T.C: O(n)
  S.C: O(n)
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let map = new Map();

    const n = nums.length;

    let i = 0;
    let j = 0;
    let c = 0;

    let result = 0;

    while(j < n) {
        let num = nums[j];
        map.set(num, (map.get(num) || 0) + 1);

        if(map.get(num) == k + 1 ) {
            c++;
        }

        while(c > 0) {
            let num = nums[i];
            map.set(num, map.get(num) - 1);
            if(map.get(num) == k) {
                c--;
            }
            i++
        }

        if(c == 0) {
            result = Math.max(result, j - i + 1); 
        }
        j++;
    }

    return result;
    
};
