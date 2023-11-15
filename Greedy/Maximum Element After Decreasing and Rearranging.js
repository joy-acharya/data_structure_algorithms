/*
    1846. Maximum Element After Decreasing and Rearranging
    Leet Code Link : https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/\
    T.C : O(nlogn)
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr = arr.sort((a,b)=>a-b);
    
    const idx = arr.indexOf(1);
    if(idx != -1) {
        let tmp = arr[0];
        arr[0] = arr[idx];
        arr[idx] = tmp
    } else {
        arr[0] = 1;
    }
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i+1] - arr[i] > 1) {
            arr[i+1] = arr[i] + 1;
        }
    }
    
    const max = arr[arr.length -1];
    return max;
};
