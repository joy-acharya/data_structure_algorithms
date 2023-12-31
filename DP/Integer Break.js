/*
  343. Integer Break
  Leet Code Link : https://leetcode.com/problems/integer-break/
  Company Asked : Amazon
*/

/* Approach 1: T.C : O(n^2) */
var integerBreak = function(n) {
    let dp = new Array(n+1).fill(-1);
    return solve(n, dp);
};


var solve = function(n, dp) {
    if(n == 1)
        return 1;
    if(dp[n] != -1)
        return dp[n];
    let result = -1;
    for(let i = 1; i <= n-1; i++) {
       let prod = i * Math.max(n-i, solve(n-i, dp));
       result = Math.max(result, prod);
    }
    return dp[n] = result;
}

/*Approach 2: T.C : O(n) */


var integerBreak = function(n) {
        if (n <= 3) {
            return n - 1;
        }
        
        let ans = 1;
        while (n > 4) {
            ans *= 3;
            n -= 3;
        }
        
        return ans * n;
};
