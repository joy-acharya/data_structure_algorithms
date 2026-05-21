/*
  3043. Find the Length of the Longest Common Prefix
  Leetcode link : https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/description/?envType=daily-question&envId=2026-05-21
  T.C : O(m*d)
  S.C : O(n)
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let set = new Set();

    for(let i = 0; i < arr1.length; i++) {
        let num = arr1[i];
        while(!set.has(num) && num > 0) {
            set.add(num);
            num = Math.floor(num / 10);
        }
    }

    let result = 0;

    for(let i = 0; i < arr2.length; i++) {
        let num = arr2[i];
        while(num > 0 && !set.has(num)) {
            num = Math.floor(num/10);
        }

        if(num > 0) {
            let len = Math.floor(Math.log10(num)) + 1;
            result = Math.max(result, len);
        }
    }

    return result;
};
