/*
  2108. Find First Palindromic String in the Array
  Leet Code Link : https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
  T.C : O(m*n)
*/


/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const n = words.length;
    
    for(let i = 0; i < n; i++) {
        let word = words[i];
        
        let start = 0;
        let end = word.length - 1;
        
        let isPalin = 1;
        
        while(start <= end) {
            if(word[start] == word[end]) {
                start++;
                end--;
            } else {
                isPalin = 0;
                break;
            }
        }
        
        if(isPalin == 1) {
            return word;
        }
    }
    
    return "";
};
