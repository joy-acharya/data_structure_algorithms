/*
  Stone Game VIII.js
  LeetCode Link: https://leetcode.com/problems/stone-game-viii
  T.C: O(n)
  S.C: O(n)

*/



/**
 * @param {number[]} stones
 * @return {number}
 */

let t;

var stoneGameVIII = function(stones) {
    let n = stones.length;

    let prefixSum = new Array(n).fill(0);

    prefixSum[0] = stones[0];

    for(let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i-1] + stones[i];
    }

    t = new Array(n).fill(0);
    t[n-1] = prefixSum[n-1];

    for(i = n-2; i >= 1; i--) {
        let take = prefixSum[i] - t[i+1];
        let skip = t[i+1];
        t[i] = Math.max(take,skip);
    }

    return t[1];
};
