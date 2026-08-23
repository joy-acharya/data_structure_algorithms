/*
  1927. Sum Game
  LeetCode Link: https://leetcode.com/problems/sum-game
  T.C: O(n)
  S.C: O(1)
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    let rightKnownSum = 0;
    let leftKnownSum = 0;
    let rightQuMarks = 0;
    let leftQuMarks = 0;

    const n = num.length

    for(let i = 0; i < n; i++) {
        if(num[i] == '?') {
            if(i < Math.floor(n / 2)) {
                leftQuMarks++;
            } else {
                rightQuMarks++;
            }
        } else {
            if(i < Math.floor(n / 2)) {
                leftKnownSum += parseInt(num[i]);
            } else {
                rightKnownSum += parseInt(num[i]);
            }
        }
    }


    if((leftQuMarks + rightQuMarks) % 2 == 1) return true;


    const LEFT = 2 * leftKnownSum + 9 *  leftQuMarks;
    const RIGHT = 2 * rightKnownSum + 9 *  rightQuMarks;

    return LEFT == RIGHT ? false : true;

};
