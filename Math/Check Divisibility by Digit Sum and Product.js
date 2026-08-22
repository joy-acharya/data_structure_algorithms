/*
  3622. Check Divisibility by Digit Sum and Product
  LeetCode Link: https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product
  T.C: O(logn)
  S.C: O(1);
*/


/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let num = n;
    let sum = 0;
    let product = 1;
    while(num >= 1) {
        let digit = num % 10;
        sum += digit;
        product *= digit;
        num = Math.floor(num / 10);
    }

    let sumP = sum + product;

    return n % sumP == 0 ? true : false;
};
