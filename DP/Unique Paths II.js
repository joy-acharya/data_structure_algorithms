/*
  63. Unique Paths II
  leet code link : https://leetcode.com/problems/unique-paths-ii/
*/


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
let m = 0;
let n = 0;
var uniquePathsWithObstacles = function(obstacleGrid) {
    m = obstacleGrid.length;
    n = obstacleGrid[0].length;
    let dp = new Array(m + 1).fill(-1).map(() => new Array(n + 1).fill(-1));
    return solve(0,0,obstacleGrid,dp);
};

var solve = function(i,j,matrix,dp) {
    if(i >= m || j >= n) return 0;
    
    if(matrix[i][j] == 1)
        return 0;
    if(i == m - 1 && j == n - 1)
        return 1;
    
    let right = solve(i , j + 1, matrix, dp);
    let down = solve(i + 1 , j, matrix, dp);
    
    return right + down;
    
}
