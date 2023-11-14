/*
  1930. Unique Length-3 Palindromic Subsequences
  Leet Code Link : https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
  Company Asked : Meta , Amazone, Google
  T.C : O(n);
  S.C : O(1)
*/

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const n = s.length;
    let result = 0;
    let uset = new Set();
    
    for(let i = 0; i < n; i++) {
        uset.add(s[i]);
    }
    
    for(let letter of uset) {
        let leftIndex = -1;
        let rightIndex = -1;
        
        for(let i = 0; i < n; i++) {
            if(s[i] == letter) {
                if(leftIndex == -1) {
                    leftIndex = i
                }
                rightIndex = i;
            }
        }
        
        let st = new Set();
        
        for(let i = leftIndex + 1; i <= rightIndex -1; i++) {
            st.add(s[i])
        }
        
        result += st.size;
    }
    
    return result;
    
};
