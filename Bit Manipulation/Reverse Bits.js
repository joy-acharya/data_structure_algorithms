/*
  Leetcode link: https://leetcode.com/problems/reverse-bits/?envType=daily-question&envId=2026-02-16
  T.C : O(1)
  S.C : O(1)
*/

/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let result = 0;

    for(let i = 1; i <= 32; i++) {
        result <<= 1;
        result = result | (n & 1);
        n >>= 1;
    }

    return result;    
};
