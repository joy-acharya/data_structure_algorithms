/*
  2333. Minimum Sum of Squared Difference
  LeetCode Link : https://leetcode.com/problems/minimum-sum-of-squared-difference
  My Profile    : https://leetcode.com/u/acharya007
  T.C           : O(n+10^5);
  S.C           : O(10^5)
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    let arr = new Array(100001).fill(0);

    let n = nums1.length;

    for(i = 0; i < n ; i++) {
        let d = Math.abs(nums1[i] - nums2[i]);
        arr[d]++;
    }

    let k = k1 + k2;

    for(let i = 100000; i > 0 && k > 0; i--) {
        let ops = Math.min(arr[i], k);

        arr[i] -= ops;
        arr[i-1] += ops;
        k -= ops;
    }


    let result = 0;

    for(let i = 1; i <= 100000; i++) {
        result += arr[i] * i * i;
    }

    return result;

};
