/*
  2482. Difference Between Ones and Zeros in Row and Column
  Leet Code Link : https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/
  T.C : O(n^2)
  S.C : O(n)
*/



/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m = grid.length;
    const n = grid[0].length
    let rowmapOne = new Array(m).fill(0);
    let rowmapZero = new Array(m).fill(0);
    
    let colmapOne = new Array(n).fill(0);
    let colmapZero = new Array(n).fill(0);
    
    for(let row = 0; row < m; row++) {
        for(let col = 0; col < n; col++) {
            if(grid[row][col] == 1) {
                rowmapOne[row] += 1;
                colmapOne[col] += 1;
            } else {
                rowmapZero[row] += 1;
                colmapZero[col] += 1;
            }
            
        }
    }
    
        for(let row = 0; row < m; row++) {
            for(let col = 0; col < n; col++) {
                   grid[row][col] = rowmapOne[row] + colmapOne[col] - rowmapZero[row] - colmapZero[col]
            }
        }
    
    return grid;

    
};
