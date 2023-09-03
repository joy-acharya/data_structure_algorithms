/*
  64. Minimum Path Sum

  Leet code link : https://leetcode.com/problems/minimum-path-sum/
*/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = new Array(m+1).fill(-1).map(()=>new Array(n+1).fill(-1));
    return solve(grid,m,n,0,0,dp);
};

var solve = function(grid, m , n, i , j, dp) {
    if(i == m -1 & j == n -1)
        return grid[m-1][n-1];
    
    if(dp[i][j] != -1)
        return dp[i][j];
    
    if(i == m-1)
        return  dp[i][j] = grid[i][j] + solve(grid, m ,n, i , j + 1, dp);
    else if (j == n -1) 
        return  dp[i][j] = grid[i][j] +  solve(grid, m ,n, i + 1 , j, dp);
    else {
        let right = solve(grid, m ,n, i , j + 1, dp);
        let down = solve(grid, m , n, i + 1, j, dp);
        return dp[i][j] = grid[i][j] + Math.min(right , down);
    }
    

}
