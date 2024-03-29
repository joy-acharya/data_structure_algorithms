/**

   2962. Count Subarrays Where Max Element Appears at Least K Times
  Leet Code Link : https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/submissions/
T.C : O(n)
S.C : O(1)
 */
var countSubarrays = function(nums, k) {
        let maxCnt = 0;
    let n = nums.length;
    let map = {};
    
    let i = 0, j = 0;
    
    let cntMax = 0;
    let MaxE = 0
    
    for(let i = 0; i < n; i++){
        MaxE = Math.max(MaxE, nums[i])
    }
    
    let result = 0;
    
    while(j < n) {
        
        if(nums[j] == MaxE) {
            cntMax++;
        }
        
        while(cntMax >=k) {
            result += n -j;
            
            if(MaxE == nums[i]){
                cntMax--;
            }
            i++;
        }
        j++;
    }
    
    return result;
};
