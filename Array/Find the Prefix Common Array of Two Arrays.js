/*
  2657. Find the Prefix Common Array of Two Arrays
  Leetcode link: https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/description/?envType=daily-question&envId=2026-05-20
  T.C : O(n)
  S.C : O(n)
*/


/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const n = A.length;

    let count = 0;

    let map = {};
    let result = [];

    for(let i = 0; i < n; i++) {
        map[A[i]] = (map[A[i]] ?? 0) + 1;
        if(map[A[i]] == 2) {
            count++;
        }

        map[B[i]] = (map[B[i]] ?? 0) + 1;
        if(map[B[i]] == 2) {
            count++;
        }

        result.push(count);

    }

    return result;
};
