/*
  1980. Find Unique Binary String
  Leet Code Link : https://leetcode.com/problems/find-unique-binary-string/
  Company Asked : Meta, Amazon, Google
  T.C : O(n)
  S.C : O(1)
*/

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let result = '';
    for(let i = 0; i < nums.length; i++) {
        let arr = nums[i].split('');
        result += arr[i] == 1 ? 0 : 1;
    }
    return result;
};
