/*
  3619. Count Islands With Total Value Divisible by K
  LeetCode Link      : https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k
  T.C                : O(m*n)
  S.C                : O(1)
  My LeetCode profile: https://leetcode.com/u/acharya007/
*/

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var dfs = function(i, j, grid, m ,n) {
    let sum = grid[i][j];
    grid[i][j] = 0;

    let dir = [[0,-1],[0,1], [1,0], [-1,0]];

    for(let d = 0; d < dir.length; d++) {
        let i_ = i + dir[d][0];
        let j_ = j + dir[d][1];

        if(i_ >= 0 && i_ < m && j_ >= 0 && j_ < n && grid[i_][j_] > 0) {
            sum += dfs(i_, j_, grid, m, n);
        }
    }

    return sum;
}

var countIslands = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;

    let count = 0;

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] > 0) {
                let sum = dfs(i, j, grid, m, n);
                if(sum % k == 0) {
                    count++;
                }
            }
        }
    }

    return count;
};
