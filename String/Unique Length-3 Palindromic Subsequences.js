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







/* approach 2 */


/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const n = s.length;
    let result = 0;
    
    let map = new Array(26).fill().map(()=>[-1,-1])
    
   
    for(let i = 0; i < n; i++) {
        let ch = s[i];
        let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if(map[idx][0] == -1) {
            map[idx][0] = i;
        }
        map[idx][1] = i;
    }
    
   for(let i = 0; i < 26; i++) {
       if(map[i][0] == -1)
           continue;
       let st = new Set();
       
       for(let m = map[i][0] + 1; m <= map[i][1] -1; m++) {
           st.add(s[m]);
       }
       result+= st.size;
   } 
   
    return result;
};
