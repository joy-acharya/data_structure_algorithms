/*
  377. Combination Sum IV
  Leet Code Link : https://leetcode.com/problems/combination-sum-iv/
  Comoany Asked : Google, Meta, Snapchat
  T.C : O(N*target)
*/


/* Approach 1 */

var combinationSum4 = function(nums, target) {
    let n = nums.length;
    let dp = new Array(n+1).fill(-1).map(()=>new Array(1001).fill(-1));
    return solve(0, nums, target, dp);
};

var solve = function(i, nums, target, dp) {
   if(target == 0)
        return 1;
    if(i >= nums.length || target < 0)
        return 0;
    
    if(dp[i][target] != -1)
        return dp[i][target];

    let take = solve(0, nums, target - nums[i], dp)
    let nottake = solve(i+1, nums, target, dp);
    return dp[i][target] = take + nottake;
}


/* Approach 2 */

var combinationSum4 = function(nums, target) {
    let n = nums.length;
    let dp = new Array(n+1).fill(-1).map(()=>new Array(1001).fill(-1));
    return solve(0, nums, target, dp);
};

var solve = function(i, nums, target, dp) {
   if(target == 0)
        return 1;
    if(i >= nums.length || target < 0)
        return 0;
    
    if(dp[i][target] != -1)
        return dp[i][target];
    let result = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let take = solve(0, nums, target - nums[i], dp);
        result += take;
        
    }
    
    return dp[i][target] = result;
}
