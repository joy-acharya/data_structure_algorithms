/*
    LeetCode link: https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones
    T.C : O(n)
    S.C : O(1)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let i = 0;

    for(let i = 1; i < s.length; i++) {
        if(s[i-1] == 0 && s[i] == 1) {
            return false
        }
    }

    return true;

};
