/*
  799. Champagne Tower
  Leet Code Link : https://leetcode.com/problems/champagne-tower/
  Company Ased : Google, Facebook, twiter
  T.C : O(query_row * query_row)
*/

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    let dp = new Array(query_row + 1).fill(-1).map(()=>new Array(query_row + 1).fill(-1));
    return Math.min(1.0, solved(poured, query_row, query_glass, dp));
};

var solved = function(poured, i, j, dp) {
    if( i < 0 || j < 0 || i < j)
        return 0.0;
    if(i == 0 && j == 0)
        return poured;
    if(dp[i][j] != -1)
        return dp[i][j];
    
    let upRight = (solved(poured, i-1, j-1, dp) - 1)/2.0;
    let upleft = (solved(poured, i-1, j, dp) - 1)/2.0;
    
    if(upRight < 0)
        upRight = 0.0;
    if(upleft < 0)
        upleft = 0.0;
    
    return dp[i][j] = upRight + upleft;
}
