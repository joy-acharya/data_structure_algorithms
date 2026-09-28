/*
  1614. Maximum Nesting Depth of the Parentheses
  LeetCode Link: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses
  T.C: O(n)
  S.C: O(1)
*/

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let runnigTotal = 0;
    let total = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(') {
            runnigTotal++;
            total = Math.max(total, runnigTotal)
        } else if(s[i] == ')') {
            runnigTotal--;
        }
    }

    return total;
};
