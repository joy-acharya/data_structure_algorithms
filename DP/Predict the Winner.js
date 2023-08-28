/*
  486. Predict the Winner
  leet code link : https://leetcode.com/problems/predict-the-winner/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    let n = nums.length;
    let sum = 0;
    let bestScore = recursion(nums, 0, n-1);
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    
    if(bestScore >= sum - bestScore)
        return true;
    return false;
    
};

let recursion = function(nums, i , j) {
    if(i > j)
        return 0;
    let choise1= nums[i] + Math.min(recursion(nums,i+2,j), recursion(nums,i+1,j-1));
    let choise2 = nums[j] + Math.min(recursion(nums,i,j-2),recursion(nums,i+1,j-1));
    return Math.max(choise1, choise2);
}
