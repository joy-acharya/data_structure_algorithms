/*
  5. Longest Palindromic Substring
  Leet Code Link: https://leetcode.com/problems/longest-palindromic-substring/
  Company Asked: Accolite, Amazon, Groupon, MakeMyTrip, Microsoft, Qualcomm, Samsung, Visa, Walmart, Zoho
  T.C : O(n^2)
  S.C : O(n^2)
*/

/**
 * @param {string} s
 * @return {string}
 */
let dp;
var longestPalindrome = function(s) {
    let maxlen = 0;
    let startPoint = 0;
    let n = s.length;
    dp = new Array(n+1).fill(-1).map(()=>new Array(n+1).fill(-1));
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            if(isPlindrome(s,i,j) == 1) {
                if(j-i+1 > maxlen) {
                    maxlen = j - i + 1;
                    startPoint = i;
                }
            }
        }
    }

    
    return s.substr(startPoint, maxlen);
};


var isPlindrome = function (s,i,j) {
    if(i >= j)
        return 1;
    if(dp[i][j] != -1)
        return dp[i][j];
    if(s[i] == s[j]) {
        return dp[i][j] = isPlindrome(s, i+1, j-1);
    }
    
    return dp[i][j] = 0;
}
