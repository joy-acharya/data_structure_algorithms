/*
  97. Interleaving String
  leet code link : https://leetcode.com/problems/interleaving-string/
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
let s1Length = 0;
let s2Length = 0;
let s3Length = 0;
var isInterleave = function(s1, s2, s3) {
    s1Length = s1.length;
    s2Length = s2.length;
    s3Length = s3.length;
    
    if(s1Length + s2Length != s3Length)
        return false;
    if(s1Length == 0 &&  s2Length == 0 && s3Length == 0)
        return true;
    const xSize = 101; 
    const ySize = 101; 
    const zSize = 201; 
    const initialValue = -1;

    const dp = Array.from({ length: xSize }, () =>
        Array.from({ length: ySize }, () =>
            Array(zSize).fill(initialValue)
        )
    );

    return solve(0,0,0,s1,s2,s3, dp);
};

var solve = function(i, j, k, s1, s2, s3, dp) {
    if(dp[i][j][k] != -1)
        return dp[i][j][k];
    
    if(i == s1Length && j == s2Length && k == s3Length)
        return true;
    if(k >= s3Length)
        return false;
    

    
    let result = false;
    
    
    
    if(s3[k] == s1[i]) {
        result = dp[i][j][k] = solve(i + 1, j, k + 1, s1, s2, s3, dp);
    }
        
    if(result == true)
        return dp[i][j][k] = true;
    
    if(s3[k] == s2[j]) {
        result = dp[i][j][k] = solve(i, j + 1, k + 1, s1, s2, s3, dp);
    } 
    
    return dp[i][j][k] = result;
}
