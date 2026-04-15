/*
  2515. Shortest Distance to Target String in a Circular Array
  https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/description/?envType=daily-question&envId=2026-04-15
  T.C : O(n*l)
  S.C : O(1)
*/


/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    let result = Number.MAX_VALUE;
    const n = words.length;
    for(let i = 0; i < n; i++) {
        if(words[i] == target) {
            let straightDistance = Math.abs(i - startIndex);
            let circularDistance = n - straightDistance;
            result = Math.min(result, straightDistance, circularDistance);
        }
    }

    return result == Number.MAX_VALUE ? -1 : result;
};
