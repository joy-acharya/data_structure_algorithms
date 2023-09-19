/*
  287. Find the Duplicate Number
  Leet code link : https://leetcode.com/problems/find-the-duplicate-number/
  Company Asked : Amazon
  T.C : O(n)
  S.C : O(1)
*/

var findDuplicate = function(nums) {
    let s = nums[0];
    let f = nums[0];
    
    s = nums[s];
    f = nums[nums[f]];
    
    while(s != f) {
        s = nums[s];
        f = nums[nums[f]];
    }
    s = nums[0];
    
    while(s != f) {
        s = nums[s];
        f = nums[f];
    }
    
    return s;
};
