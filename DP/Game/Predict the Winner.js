/*
  486. Predict the Winner
  LeetCode Link: https://leetcode.com/problems/predict-the-winner
  T.C: O(n^2)
  S.C: O(n^2)
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */

var solve = function(i, j , nums, t) {

    if(i > j) return 0;

    if(i == j) return nums[i];

    if(t[i][j] != -1) return t[i][j];

    let take_i = nums[i] + Math.min(solve(i+2, j, nums, t), solve(i+1,j-1, nums, t));
    let take_j = nums[j] + Math.min(solve(i+1, j-1, nums, t), solve(i,j-2, nums, t));

    return t[i][j] = Math.max(take_i, take_j); 
}


var predictTheWinner = function(nums) {
    const n = nums.length;

    let t = new Array(n).fill(-1).map(()=>new Array(n).fill(-1));

    let sum = 0;

    for(let k = 0; k < n; k++) {
        sum += nums[k];
    }

    const player1 = solve(0, n -1, nums, t);

    const player2 = sum - player1;

    return player1 >= player2;

};
