/*
  1269. Number of Ways to Stay in the Same Place After Some Steps
  Leet Code Link : https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/
  Company Asked : Google, Meta
  T.C : O(min(arrLength,steps) * steps);
*/

/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
let MOD = 1000000000 + 7;
var numWays = function(steps, arrLen) {
    let dp = new Array(steps+1).fill(-1).map(()=>new Array(steps+1).fill(-1));
    arrLen = Math.min(arrLen, Math.ceil(steps/2)+1);
    return solve(0, steps, arrLen, dp);
};

var solve = function(idx, steps, n, dp) {
    if(idx < 0 || idx >= n)
        return 0;
    
    if(steps == 0) {
        if(idx == 0)
            return 1;
        else
            return 0;
    }
        
    
    if(dp[idx][steps] != -1)
        return dp[idx][steps];
    
    
    let result = solve(idx+1, steps -1, n, dp);
    result = (result + solve(idx-1, steps-1, n, dp)) % MOD;
    result = (result + solve(idx, steps - 1, n, dp)) % MOD;
    
    return dp[idx][steps] = result;
}
