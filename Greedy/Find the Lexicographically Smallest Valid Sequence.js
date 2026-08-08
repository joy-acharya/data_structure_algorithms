/*
  3302. Find the Lexicographically Smallest Valid Sequence
  LeetCode Link: https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence
  T.C: O(n + m)
  S.C: O(n)
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;
    
    let arr = new Array(n).fill(0);
    let i = n - 1;
    let j = m - 1

    let count = 0;
    while(i >= 0) {
        if(j >= 0 && word1[i] == word2[j]) {
            count++;
            j--;
        }

        arr[i] = count;
        i--;
    }

    i = 0;
    j = 0;

    let result = [];

    let hasPower = true;
     while(i < n && j < m) {

        if(word1[i] == word2[j]) {
            result.push(i);
            j++;
        } else if(hasPower == true && arr[i+1] >= m - j - 1) {
            result.push(i);
            j++;
            hasPower = false;
        }

        i++;
     }

     if( j == m) return result;
     return [];
    
};
