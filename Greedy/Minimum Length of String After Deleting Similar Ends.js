/*
  1750. Minimum Length of String After Deleting Similar Ends
  Leet Code Link : https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/
  T.C : O(n)
  S.C : O(1)
*/


/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const n = s.length;
    let start = 0;
    let end = n -1;
    
    
    while(start < end && s[start] == s[end]) {
        let char = s[start];
        
        while(start <= end && s[start] == char) {
            start++;
        }
        
         while(end > start && s[end] == char) {
            end--;
        }
    }
    
    return end - start + 1;
    
};
