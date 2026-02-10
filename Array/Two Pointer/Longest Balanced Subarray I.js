/*
  229. Majority Element II
  Leet Code Link : https://leetcode.com/problems/longest-balanced-subarray-i
  T.C : O(n^2)
  S.C : O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        let evenSet = new Set();
        let oddSet = new Set();

        for(let j = i; j < nums.length; j++) {
            
            if (nums[j] % 2 === 0) {
                evenSet.add(nums[j]);
            } else {
                oddSet.add(nums[j]);
            }

            if (evenSet.size === oddSet.size) {
                ans = Math.max(ans, j - i + 1);
            }
        }
    }

    return ans;
};
