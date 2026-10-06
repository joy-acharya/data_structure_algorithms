/*
  921. Minimum Add to Make Parentheses Valid
  LeetCode Link: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid
  T.C: O(n)
  S.C: O(n)
*/

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let n = s.length;

    let openList = [];
    let count = 0;

    for(let i = 0; i < n; i++) {
        if(s[i] == '(') {
            openList.push('(');
        } else {
            if(openList.length == 0) {
                count++;
            } else {
                openList.pop();
            }
        }
    }

    return count + openList.length;
};
