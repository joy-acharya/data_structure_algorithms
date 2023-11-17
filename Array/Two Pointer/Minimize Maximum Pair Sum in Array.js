/*
  1877. Minimize Maximum Pair Sum in Array
  Leet Code Link : https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
  Company Asked : Amazon
  T.C : O(nlogn)
  S.C : O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let l = 0;
    let h = nums.length - 1;
    let result = 0;
    while(l <= h) {
        result = Math.max(result, nums[l] + nums[h])
        l++;
        h--;
    }
    return result;
};
