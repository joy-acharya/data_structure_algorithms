/*
  3090. Maximum Length Substring With Two Occurrences
  LeetCode Link: https://leetcode.com/problems/maximum-length-substring-with-two-occurrences
  T.C: O(n+m)
  S.C: O(n)
*/

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let i = 0;
    let j = 0;
    const n = s.length;
    let map = new Map();
    let result = 0;

    while(j < n) {
        let str = s[j];
        map.set(str, (map.get(str) || 0) + 1);

        while(i < j && map.get(str) > 2) {
            let str = s[i];
            map.set(str, (map.get(str) || 0) - 1);
            i++;    
        }

        result = Math.max(result, j - i + 1);

        j++;
    }

    return result;
};
