/*
  LeetCode link: https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation
  T.C : O((right-left)*log(num))
  S.C : O(1)
  
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    const primes = new Set([2,3,5,7,11,13,17,19])
    let result = 0;
    for(let i = left; i <= right; i++) {
        let count = countSetBits(i);
        if(primes.has(count)) {
            result += 1;
        }
    }

    return result;
};

function countSetBits(num) {
    let count = 0;
    while(num > 0) {
        count += num & 1;
        num >>= 1;
    }
    return count;
}
