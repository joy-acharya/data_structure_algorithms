/*
  3736. Minimum Moves to Equal Array Elements III
  LeetCode Link: https://leetcode.com/problems/minimum-moves-to-equal-array-elements-iii
  T.C: nlogn
  S.C: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let n =  nums.length;

    nums.sort((a,b)=>a-b);

    let max = nums[n - 1];

    let move = 0;

    for(let i = 0; i < n; i++) {
        move += max - nums[i]
    }

    return move;
};
