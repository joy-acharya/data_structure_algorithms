/*
  3517. Smallest Palindromic Rearrangement I
  LeetCode Link: https://leetcode.com/problems/smallest-palindromic-rearrangement-i
  T.C: O(n)
  S.C: O(n)
*/

/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const n = s.length;
    const mid = Math.floor(n / 2);
    
 
    const freq = new Int32Array(26);
    
 
    for (let i = 0; i < mid; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }
    
 
    const res = new Uint16Array(n);
    
 
    let leftPtr = 0;
    for (let i = 0; i < 26; i++) {
        while (freq[i] > 0) {
            const charCode = i + 97;
            res[leftPtr] = charCode;
            res[n - 1 - leftPtr] = charCode;
            leftPtr++;
            freq[i]--;
        }
    }

    if (n % 2 !== 0) {
        res[mid] = s.charCodeAt(mid);
    }
    
 
    return String.fromCharCode.apply(null, res);
};
