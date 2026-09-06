/*
  115. Distinct Subsequences
  LeetCode link: https://leetcode.com/problems/distinct-subsequences
  T.C: O(n^2)
  S.C: O(n^2)
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

let tt;

var solve = function(s, t, m , n) {
    if(n == 0) return 1
    if(m == 0) return 0;

    if(tt[m][n] != -1) return tt[m][n];

    if(s[m-1] == t[n-1]) {
        return tt[m][n] = solve(s,t,m-1,n-1) + solve(s,t,m-1, n);
    } else {
        return tt[m][n] = solve(s,t,m-1, n);
    }
} 


var numDistinct = function(s, t) {
    tt = new Array(s.length + 1).fill(-1).map(()=>new Array(t.length + 1).fill(-1));
    return solve(s, t, s.length, t.length);    
};
