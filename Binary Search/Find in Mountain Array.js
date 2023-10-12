/*
  1095. Find in Mountain Array
  Leet Code Link : https://leetcode.com/problems/find-in-mountain-array/
  Company Asked : Amazon
  T.C : O(logn)
*/

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let n = mountainArr.length();
    let peek = getPeekIdx(mountainArr, n);
    let idx = binarySearch(mountainArr, 0, peek, target);
    if(idx != -1)
        return idx;
    idx = reverseBinarySearch(mountainArr, peek+1, n-1, target);
    return idx;
    
};

var reverseBinarySearch = function(mountainAry, l, r, target) {
     while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        
        if(mountainAry.get(mid) == target) {
            return mid;
        } else if(mountainAry.get(mid) > target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    
    return -1;
}

var binarySearch = function(mountainAry, l, r, target) {
     while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        
        if(mountainAry.get(mid) == target) {
            return mid;
        } else if(mountainAry.get(mid) > target) {
            r = mid - 1;  
        } else {
            l = mid + 1;
        }
    }
    
    return -1;
}

var getPeekIdx = function(mountainArr, n) {
    let l = 0;
    let r = n - 1;
    
    while(l < r) {
        let mid = l + Math.floor((r-l)/2);
        
        if(mountainArr.get(mid) < mountainArr.get(mid+1)) {
            l = mid + 1;            
        } else {
            r = mid;
        }
    }
    
    return l;
}
