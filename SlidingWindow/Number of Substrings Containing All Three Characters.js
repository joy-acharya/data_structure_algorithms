/*
  1358. Number of Substrings Containing All Three Characters
  Leetcode link: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters
  T.C: O(n)
  S.C: O(1)
*/

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const n = s.length;
    let result = 0;

    let mp = new Array(3).fill(0);

    let i = 0;
    let j = 0;

    while(j < n) {
        const ch = s[j];
        mp[ch.charCodeAt(0) - 97]++;

        while(mp[0] > 0 && mp[1] > 0 && mp[2] > 0) {
            result += n - j;
            mp[s[i].charCodeAt(0) - 97]--;
            i++;
        }

        j++;
    }

    return result;
     
};
