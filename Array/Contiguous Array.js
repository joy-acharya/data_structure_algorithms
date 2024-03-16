/*
  525. Contiguous Array
  Leet Code Link : https://leetcode.com/problems/contiguous-array/
  T.C : O(n);
  S.C : O(1);
  Company Asked : Google, Meta
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let maxLan = 0;
    
    let n = nums.length;
    
    let map = {};
    map['0'] = -1;
    
    let curSum = 0;
    
    for(let i = 0; i < n; i++) {
        if(nums[i] == 0) {
            curSum -= 1;
        } else {
            curSum += 1;
        }
        
        if(map[curSum] !== undefined) {
            let length = i - map[curSum];
            if(maxLan < length) {
                maxLan = length;
            }
        } else {
            map[curSum] = i;
        }
    }
    
    return maxLan;
    
};


