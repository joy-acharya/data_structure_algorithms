/*
  3014. Minimum Number of Pushes to Type Word I
  LeetCode Link: https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i
  T.C: O(1)
  S.C: O(1)
*/

/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let n = word.length;
    let total = 0;
    if(n <= 8) {
        return n;
    }

    let cnt = 1;
    while( n > 0) {
        let take = Math.min(n, 8);
        total += take * cnt;
        n -= take;
        cnt++;
    }

    return total;
};
