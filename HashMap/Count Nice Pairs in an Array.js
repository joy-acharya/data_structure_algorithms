/*
  1814. Count Nice Pairs in an Array
  Leet Code Link : https://leetcode.com/problems/count-nice-pairs-in-an-array/submissions/
  T.C : O(nlogn)
  S.C : 0(n)
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
function reverseNum(n) {
  let r = n.toString().split('').reverse().join('');
  return Math.sign(n) * parseInt(r);
}
var countNicePairs = function(nums) {
    const map = {};
    const n = nums.length;
    let count = 0;
    
    for(let i = 0; i < n ; i++) {
        let num = nums[i] - reverseNum(nums[i]);
        nums[i] = num;
    }
    
    for(let i = 0; i < n ; i++) {
        count = (count + (map[nums[i]] || 0) ) % 1000000007;
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
    
    return count;
    
};
