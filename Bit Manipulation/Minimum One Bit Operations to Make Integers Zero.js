/*
  1611. Minimum One-Bit Operations to Make Integers Zero
  Leet Code Link: https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/?envType=daily-question&envId=2023-11-30
  Company Aked : Linkdin
  
*/


/**
 * @param {number} n
 * @return {number}
 */

function minimumOneBitOperations(n) {
    if (n === 0) {
        return 0;
    }

    const functionArray = new Array(32);
    functionArray[0] = 1;

    for (let i = 1; i <= 31; i++) {
        functionArray[i] = 2 * functionArray[i - 1] + 1;
    }

    let result = 0;
    let sign = 1;

    for (let i = 30; i >= 0; i--) {
        const ithBit = (1 << i) & n;

        if (ithBit === 0) {
            continue;
        }

        if (sign > 0) {
            result += functionArray[i];
        } else {
            result -= functionArray[i];
        }

        sign *= -1;
    }

    return result;
}
