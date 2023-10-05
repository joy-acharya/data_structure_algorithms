/*
  229. Majority Element II
  Leet Code Link : https://leetcode.com/problems/majority-element-ii/
  Company Asked : Amazon, Google, Microsoft, Samsung
  T.C : O(n)
  S.C : O(n)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let n = nums.length;
    let times = Math.floor(n / 3);
    
    let cnt1 = 0, cnt2 = 0, maj1 = 0, maj2 = 0;
    
    for(let i = 0; i < n; i++) {
        if(nums[i] == maj1) {
            cnt1++
        } else if(nums[i] == maj2) {
            cnt2++;
        } else if(cnt1 == 0) {
            maj1 = nums[i];
            cnt1 = 1;
        } else if(cnt2 == 0) {
            maj2 = nums[i];
            cnt2++;
        } else {
            cnt1--;
            cnt2--;
        }
    }
    
    let freq1 = 0;
    let freq2 = 0;
    
    for(let i = 0; i < n; i++) {
        if(nums[i] == maj1) {
            freq1++;
        } else if(nums[i] == maj2) {
            freq2++;
        }
    }
    let result = [];
    
    if(freq1 > times) {
        result.push(maj1)
    }
    if(freq2 > times) {
        result.push(maj2)
    }
    
    return result;
    
};
