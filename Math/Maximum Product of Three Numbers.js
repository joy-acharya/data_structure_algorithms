/*
  628. Maximum Product of Three Numbers
  LeetCode Link: https://leetcode.com/problems/maximum-product-of-three-numbers
  T.C: O(n)
  S.C: O(1)
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    const n = nums.length;
    // nums.sort((a,b)=>b-a);
    // let maxProd = Number.MIN_SAFE_INTEGER;

    // maxProd = Math.max(maxProd, nums[0] * nums[1] * nums[2]);
    // maxProd = Math.max(maxProd, nums[0] * nums[1] * nums[n-1]);
    // maxProd = Math.max(maxProd, nums[0] * nums[n-2] * nums[n-1]);
  

    // return maxProd;


    let a = -Infinity, b = -Infinity, c = -Infinity;

    let min1 = Infinity;
    let min2 = Infinity;

    for(let i = 0; i < n; i++) {
        let num = nums[i];

        if(num <= min1) {
            min2 = min1;
            min1 = num;
        } else if(num <= min2) {
            min2 = num;
        }

        if(num >= a) {
            c = b;
            b = a;
            a = num;
        } else if(num >= b) {
            c = b;
            b = num;
        } else if(num >= c) {
            c = num;
        }
    }

    return Math.max(min1 * min2 * a, a * b * c);
};
