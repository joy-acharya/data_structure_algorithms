/*
  1913. Maximum Product Difference Between Two Pairs
  Leetcode Link : https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
  T.C : O(n)
  S.C : O(1)
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    const n = nums.length;
    
    let largest = Number.NEGATIVE_INFINITY;
    let seclargest = Number.NEGATIVE_INFINITY;
    
    let smalest = Number.POSITIVE_INFINITY;
    let secsmalest = Number.POSITIVE_INFINITY;
    

    
    for(let i = 0; i < n; i++) {
        if(nums[i] > largest) {
            seclargest = largest;
            largest = nums[i];
        } else {
            seclargest = Math.max(seclargest, nums[i]);
        }
        
        if(nums[i] < smalest) {
            secsmalest = smalest;
            smalest = nums[i];
        } else {
            secsmalest = Math.min(secsmalest, nums[i]);
        } 
        
    }
    
    
    return (largest * seclargest) - (smalest * secsmalest);
   
};
