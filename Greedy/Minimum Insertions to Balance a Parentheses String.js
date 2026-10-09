/*
  1541. Minimum Insertions to Balance a Parentheses String
  LeetCode Link: https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string
  T.C: O(n)
  S.C: O(1)
*/

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let count = 0;
    
    let result = 0;
    
    let n = s.length;

    let i = 0

    while(i < n) {
        if(s[i] == '(') {
            count++;
            i++;
        } else {
            if(count > 0) {
                count--;
            } else {
                result++;
            }

            if(i + 1 < n && s[i+1] == ')') {
                i += 2;
            } else {
                result++;
                i++;
            }
        }
    }

 
    return result + count * 2;

};
