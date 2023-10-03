/*
  1512. Number of Good Pairs
  Leet code link : https://leetcode.com/problems/number-of-good-pairs/
  Company Asked : Meta
  T.C : O(n)
*/

var numIdenticalPairs = function(nums) {
    let ans = 0;
    let baseAry = new Array(101).fill(0);
    
    for(let i = 0; i < nums.length; i++) {
        ans += baseAry[nums[i]];
        baseAry[nums[i]]++;
    }
    return ans;
};
