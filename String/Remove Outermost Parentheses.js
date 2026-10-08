/*
  1021. Remove Outermost Parentheses
  LeetCode Link: https://leetcode.com/problems/remove-outermost-parentheses
  T.C: O(n);
  S.C: O(1)
*/


/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let count = 0;
    let n = s.length;
    let result = '';

    for(let i = 0; i < n; i++) {
        if(s[i] == '(') {
            if(count != 0) result += '(';
            count++;
        } else {
            count--;
            if(count != 0) result += ')';
        }
    }

    return result;
};
