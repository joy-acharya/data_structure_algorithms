/*
  3121. Count the Number of Special Characters II
  Leetcode link: https://leetcode.com/problems/count-the-number-of-special-characters-ii/description/?envType=daily-question&envId=2026-05-27
  T.C : O(n)
  S.C : O(n)
*/


/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let map = new Map();

    for(let i = 0; i < word.length; i++) {
        if(map.get(word[i]) >= 0 && /[A-Z]/.test(word[i]))
            continue;
        map.set(word[i], i);
    }


    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";

    let count = 0;

    for(let i = 0; i < 26; i++) {
        let lowerIndex = map.get(lower[i]);
        let upperIndex = map.get(upper[i]);
        if(lowerIndex >= 0 && upperIndex >= 0 && lowerIndex < upperIndex) {
            count++;
        }
    }

    return count;
};
