/*
  1855. Maximum Distance Between a Pair of Values
  Leetcode link: https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/description/?envType=daily-question&envId=2026-04-19
  T.C: O(m+n)
  S.C: O(1)
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    let i = 0, j = 0;

    const m = nums1.length;
    const n = nums2.length;

    let result = 0;

    while(i < m && j < n) {
        if(nums1[i] > nums2[j]) {
            i++;
        } else {
            result = Math.max(result, j - i);
            j++;
        }
    }

    return result;
};
