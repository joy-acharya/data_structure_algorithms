/*
  39. Combination Sum
  Leet code link : https://leetcode.com/problems/combination-sum/
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
   let res = [];
   backTrack(candidates, res, [], target, 0);
   return res;
};

var backTrack = (nums, res, arr, target, i) => {
    if(target === 0)  return res.push([...arr]);
    if(target < 0) return;

    for(let j = i; j < nums.length ; j++) {
        arr.push(nums[j]);
        backTrack(nums,res, arr, target - nums[j], j);
        arr.pop();
    }
}

