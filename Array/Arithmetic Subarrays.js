/*
  1630. Arithmetic Subarrays
  Leet Code Link : https://leetcode.com/problems/arithmetic-subarrays/
  T.C : m * nlogn
  S.C : O(n)
*/

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const n = nums.length;
    const m = l.length = r.length;
    const result = new Array(m).fill(true);
    
    for(let i = 0; i < m; i++) {
        const arr = nums.slice(l[i],r[i]+1).sort((a,b)=>a-b);
        const d = arr[1] - arr[0];
        for(let j = 2; j < arr.length; j++) {
            if((arr[j] - arr[j-1]) !== d) {
                result[i] = false;
                break;
            }
        }
    }
    return result;
};
