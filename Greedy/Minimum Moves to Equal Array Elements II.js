/*
  462. Minimum Moves to Equal Array Elements II
  LeetCode Link: https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii
  T.C: O(nlogn)
  S.C: O(1)
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    let n = nums.length;
    let moves = 0;

    nums.sort((a,b)=> a-b);

    let mid = nums[Math.floor(n/2)];

    for(let i = 0; i < n/2; i++) {
        moves +=  Math.abs(nums[i] - mid) + Math.abs(nums[n-i-1] - mid);
    }

    return moves;
};
