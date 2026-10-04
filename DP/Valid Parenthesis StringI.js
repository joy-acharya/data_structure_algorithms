/*
  678. Valid Parenthesis String
  LeetCode Link: https://leetcode.com/problems/valid-parenthesis-string
  T.C: O(n^2)
  S.C: O(n^2)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var solve = function(i, open, s, n) {
    if(i == n) {
        return open == 0;
    }

    if(t[i][open] != -1) {
        return t[i][open];
    }

    let valid = false;

    if(s[i] == '(') {
        valid |= solve(i+1, open+1, s, n);
    } else if(s[i] == '*') {
        valid |= solve(i+1, open+1, s, n);
        valid |= solve(i+1, open, s, n);
        if(open > 0) {
            valid |= solve(i+1, open-1, s, n);
        }
    } else if(open > 0) {
        valid |= solve(i+1, open-1, s, n);
    }

    return t[i][open] = valid;
}

let t;

var checkValidString = function(s) {
    t = new Array(101).fill(-1).map(()=> new Array(101).fill(-1));
    let n = s.length;
    return solve(0, 0, s, n);
};
