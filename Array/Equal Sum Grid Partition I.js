/*
  Leetcode link: https://leetcode.com/problems/equal-sum-grid-partition-i/description/?envType=daily-question&envId=2026-03-25
  T.C : O(m*n)
  S.C : O(m+n)
*/

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let rowSum = new Array(m).fill(0);
    let colSum = new Array(n).fill(0);

    let total = 0;

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            total += grid[i][j];
            rowSum[i] += grid[i][j];
            colSum[j] += grid[i][j];
        }
    }

    if(total % 2 != 0) return false;

    let upper = 0;
    for(let i = 0; i < m-1; i++) {
        upper += rowSum[i];
        if(upper == total - upper) return true;
    }

    let left = 0;
    for(let j = 0; j < n-1; j++) {
        left += colSum[j];
        if(left == total - left) return true;
    }

    return false;

};
