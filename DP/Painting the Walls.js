/*
  2742. Painting the Walls
  Leet Code Link : https://leetcode.com/problems/painting-the-walls/
  Company Asked : Google
  T.C : O(n^2)
*/

let n = 0;
var paintWalls = function(cost, time) {
    n = cost.length;
    let dp = new Array(n+1).fill(-1).map(()=>new Array(n+1).fill(-1));
    return solve(0,n,cost,time,dp);  
};

var solve = function(idx, remaining, cost, time, dp) {
    if(remaining <= 0)
        return 0;
    if(idx >= n)
        return Number.MAX_SAFE_INTEGER;
    
    if(dp[idx][remaining] != -1)
        return dp[idx][remaining];
    
    let paint = cost[idx] + solve(idx+1, remaining -1 - time[idx], cost, time, dp);
    let nopaint = solve(idx+1, remaining, cost, time, dp);
    
    return dp[idx][remaining] = Math.min(paint, nopaint);
}
