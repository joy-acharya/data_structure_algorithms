/*
  62. Unique Paths
  Leet Code Link : https://leetcode.com/problems/unique-paths/
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
    let dp = new Array(m + 1).fill(-1).map(() => new Array(n + 1).fill(-1));
    return solve(0,0,m,n,dp);
};


var solve = function(i,j,m,n,dp) {
    if(i >= m || i < 0 || j >= n || j < 0)
        return 0;
    if(dp[i][j] != -1)
        return dp[i][j];
    if(i == m -1 && j == n -1)
        return 1;
    if(i >= m && j >= n)
        return 0;
    let right = solve(i, j + 1,m,n,dp);
    let down = solve(i + 1, j , m, n,dp);
    return dp[i][j] = right + down;
}
