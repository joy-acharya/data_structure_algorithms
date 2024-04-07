/*
  678. Valid Parenthesis String
  Leet Code Link : https://leetcode.com/problems/valid-parenthesis-string/
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let n = s.length;
    let dp = new Array(n+1).fill(-1).map(()=> new Array(n+1).fill(-1));
    return solve(s,n,0,0,dp);
};


var solve = function(s,n,i,open,dp) {
    if(i >= n) {
        return open == 0;
    }
    
    if(dp[i][open] !== -1) {
        return dp[i][open];
    }
    
    let isValid = false;
    
    if(s[i] == '(') {
        isValid |= solve(s,n,i+1,open+1, dp);        
    } else if(s[i] == '*') {
       isValid |= solve(s, n, i+1, open+1, dp);
        isValid |=solve(s, n, i+1, open, dp);
        if(open > 0) {
            isValid |= solve(s, n, i+1, open-1, dp);            
        }
    } else if(open > 0) {
        isValid |= solve(s, n, i+1, open-1, dp);
    }
    
    return dp[i][open] = isValid;
}
