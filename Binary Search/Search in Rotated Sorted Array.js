/*
  33. Search in Rotated Sorted Array
  Leetcode link: https://leetcode.com/problems/search-in-rotated-sorted-array/description/?envType=daily-question&envId=2026-05-22
  T.C : O(logn)
  S.C : O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var findPivot = (nums,target,n) => {
    let l = 0;
    let r = n-1;

    while(l < r) {
        let mid = Math.floor(l + (r-l)/2);

        if(nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return r;
}

var binarySearch = (l, r, nums, target) => {
    let idx = -1;

    while(l <= r) {
        let mid = Math.floor(l + (r-l)/2);
    
        if(nums[mid] == target) {
            idx =  mid;
            break;
        } else if(nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return idx;
}

var search = function(nums, target) {
    const n = nums.length;
    let pivotIndex = findPivot(nums, target, n);

    let idx = binarySearch(0, pivotIndex - 1, nums, target);

    if(idx != -1) return idx;

    idx = binarySearch(pivotIndex, n - 1, nums, target);

    return idx;
};

