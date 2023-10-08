/*
  1458. Max Dot Product of Two Subsequences
  Leet Code Link : https://leetcode.com/problems/max-dot-product-of-two-subsequences/
  T.C : O(m*n);
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let m = 0;
let n = 0;
var maxDotProduct = function(nums1, nums2) {
    m = nums1.length;
    n = nums2.length;
    let dp = new Array(m+1).fill(-1).map(()=>new Array(n+1).fill(-1));
    return solve(0,0,nums1,nums2,dp);
};

var solve = function(i,j,nums1,nums2,dp) {
    if(i == m || j == n) {
        return -1000000000;
    } 
    
    if(dp[i][j] != -1) {
        return dp[i][j];
    }
    
    let val = nums1[i] * nums2[j];
    let takeij = nums1[i] * nums2[j] + solve(i+1,j+1,nums1,nums2,dp);
    let takei = solve(i,j+1,nums1,nums2,dp);
    let takej = solve(i+1,j,nums1,nums2,dp);
    return dp[i][j] = Math.max(val,takeij,takei,takej);
}
