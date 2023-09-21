/*
  4. Median of Two Sorted Arrays
  Leet Code Link : https://leetcode.com/problems/median-of-two-sorted-arrays/
  Company Asked : Google, Microsoft, Apple
  T.C : O(log (m+n))
*/

var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = [...nums1 , ...nums2];
    nums3.sort((a,b)=>a-b);
    let l = nums3.length;
    if(l % 2 == 0) {
        l /=2;
        return (nums3[l] + nums3[l-1])  / 2;
    } else  {
        l = Math.floor(l / 2);
        return nums3[l]; 
    }
};
