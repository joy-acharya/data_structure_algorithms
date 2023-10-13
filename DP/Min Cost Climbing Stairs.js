/*
  746. Min Cost Climbing Stairs
  Leet Code Link: https://leetcode.com/problems/min-cost-climbing-stairs/
  Company Asked: Google
  T.C: O(n)
*/

var minCostClimbingStairs = function(cost) {
    let dp = new Array(cost.length + 1).fill(-1);
    return solve(cost, 0, dp);
};

var solve = function(cost, i, dp) {
    if(i >= cost.length - 1)
        return 0;
    if(dp[i] != -1)
        return dp[i];
    
    let take_i_plus_one = cost[i] + solve(cost,i+1, dp);
    let take_i_plus_two = cost[i+1] + solve(cost,i+2, dp);
    return dp[i] = Math.min(take_i_plus_one,take_i_plus_two);
}
