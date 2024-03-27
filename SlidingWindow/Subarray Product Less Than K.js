/*
  713. Subarray Product Less Than K
  Leet Code Link : https://leetcode.com/problems/subarray-product-less-than-k/
  Asked By : Meta
  T.C : O(n)
  S.C : O(1)
*/

var numSubarrayProductLessThanK = function(nums, k) {
    let prod = 1;
    let n = nums.length;
    let i = 0, j = 0;
    let count = 0;
    
    if(k <= 1)
        return 0;
    
    while(j < n) {
        prod *= nums[j];
        
        while(prod >= k) {
            prod /= nums[i];
            i++;
        }
        
        count += (j - i + 1);
        j++;
    }
    
    return count;
};
