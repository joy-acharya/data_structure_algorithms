/*
  3016. Minimum Number of Pushes to Type Word II
  LeetCode Link: https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii
  T.C: O(n)
  S.C: O(1)
*/


/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let n = word.length;
    let map = new Array(26).fill(0);

    for(let i = 0; i < n; i++) {
        map[word.charCodeAt(i) - 97]++;
    }

    map.sort((a,b)=>b-a);
    n = map.length;
    let total = 0;

    for(let i = 0; i < n; i++) {
        if(map[i] == 0) continue;
        let push = Math.floor(i / 8) + 1;
        total += map[i] * push;
    }
    return total;
};
