/*
  1759. Count Number of Homogenous Substrings
  Leet Code Link : https://leetcode.com/problems/count-number-of-homogenous-substrings/
  T.C : O(n)
  S.C : O(1)
*/

/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let ans = 0;
    let length = 0;
    const MOD = 1000000007;
    
    for(let i = 0; i < s.length; i++) {
        if(i == 0 || s[i] == s[i-1]) {
            length++;
        } else {
            length = 1;
        }
        
        ans = (ans + length) % MOD;
    }
    return ans;
};
