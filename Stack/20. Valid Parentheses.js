/*
  20. Valid Parentheses
  LeetCode Link: https://leetcode.com/problems/valid-parentheses
  T.C: O(n)
  S.C: O(n)
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Early exit: odd length string can never be valid
    if (s.length % 2 !== 0) return false;

    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char]) {
            // It's a closing bracket: check if top of stack matches its opening pair
            if (stack.pop() !== map[char]) {
                return false;
            }
        } else {
            // It's an opening bracket: push onto stack
            stack.push(char);
        }
    }

    // Valid if all brackets were properly matched and closed
    return stack.length === 0;
};
