/*
  2009. Minimum Number of Operations to Make Array Continuous
  Leet Code Link: https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/
  Company Asked: Google
  T.C : O(nlogn)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    let n = nums.length;
    const uniqueNums = [...new Set(nums)];
    let operation = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < uniqueNums.length ; i++) {
        let j = i;
        while (j < uniqueNums.length && uniqueNums[j] < uniqueNums[i] + n) {
            j++;
        }
        let op = j - i;
        operation = Math.min(operation, n - op);
    }
    return operation;
};
