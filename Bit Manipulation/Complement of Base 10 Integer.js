/*
  https://leetcode.com/problems/complement-of-base-10-integer/description
  T.C : O(log2^n)
  S.C : 0(1)
*/


// solution 1

/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if(n === 0) return 1;
    let mask = 0;

    while(mask < n) {
        mask = (mask << 1) | 1;
    }

    return mask ^ n;
};


// solution 2


/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if(n === 0) return 1;
    let counter = 0;
    let result = 0;

    while(n) {
        let r = n % 2;
        result += Math.pow(2,counter) * (r === 0 ? 1 : 0);
        n = Math.floor(n/2);
        counter++;
    }

    return result;
};
