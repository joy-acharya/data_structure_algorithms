/*
  34. Find First and Last Position of Element in Sorted Array
  Leet Code Link : 34. Find First and Last Position of Element in Sorted Array
  T.C : O(logn)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let ans = [];
    while(left <= right) {
        let mid = left + parseInt((right - left) / 2);
        
        if(nums[mid] == target) {
            let i = mid;
            let j = mid;
            
            while(i >= 0) {
                if(nums[i] != target)
                    break;
                i--;
            }
            
            while(j < nums.length) {
                if(nums[j] != target)
                    break;
                j++;
            }
            return [i + 1, j -1];
            
        } else if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }
    return [-1,-1];
};
