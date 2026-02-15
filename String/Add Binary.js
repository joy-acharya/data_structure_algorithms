/*
  LeetCode link: https://leetcode.com/problems/add-binary
  T.C : O(n)
  S.C: O(1)
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let m = a.length - 1;
    let n = b.length - 1;
    let carry = 0;
    let sum = 0;
    let result = "";

    while(m >= 0 || n >= 0) {
        sum = carry;
        if(m >= 0) {
            sum += parseInt(a[m]);
            m--;
        } 
        
        if(n >= 0) {
            sum += parseInt(b[n]);
            n--;
        }

        result = (sum % 2 === 0 ? '0' : '1') + result;
        carry = sum > 1 ? 1 : 0;
    }

    if(carry) {
        result = '1' + result;
    }

    return result;
};
