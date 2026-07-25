/*
  3536. Maximum Product of Two Digits
  LeetCode Link: https://leetcode.com/problems/maximum-product-of-two-digits
  T.C: O(d) // d no of digits
  S.C: O(1)
*/


/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let f = 0, s = 0;

    while(n > 0) {
        const d = n % 10;

        if(d >= f) {
            s = f;
            f = d
        } else if(d > s) {
            s = d;
        }

        n = Math.floor(n / 10)
    }
    
    return f * s;

};

 
