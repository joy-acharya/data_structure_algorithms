/*
  Leetcode link: https://leetcode.com/problems/binary-gap
  T.C : O(logn)
  S.C : O(1)
*/

  
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let curr = 0;
    let prev = -1;
    let result = 0;

    while(n > 0) {

        if((n & 1) > 0) {
            result = prev != -1 ? Math.max(result, curr - prev) : result;
            prev = curr;
        }

        curr++;
        n >>= 1;
    }

    return result;
};
