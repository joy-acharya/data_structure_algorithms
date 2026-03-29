/*
  Leetcode link: https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i
  T.C : O(1)
  S.C : O(1)
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {


    let c1 = (s1[0] == s2[0] && s1[2] == s2[2]) || (s1[0] == s2[2] && s1[2] == s2[0]);
    let c2 = (s1[1] == s2[1] && s1[3] == s2[3]) || (s1[1] == s2[3] && s1[3] == s2[1]);

    return c1 && c2;

};
