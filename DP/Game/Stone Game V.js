/*
  1563. Stone Game V
  LeetCode Link: https://leetcode.com/problems/stone-game-v
  T.C: O(n^3)
  S.C: O(n^2)
*/

/**
 * @param {number[]} stoneValue
 * @return {number}
 */

let t;

var solve = function(l, r, prefixSum) {
    if(l >= r) return 0;

    if(t[l][r] != -1) return t[l][r];

    let score = 0;

    for(let mid = l; mid < r; mid++) {
        const leftSum = prefixSum[mid] - ((l - 1) >= 0 ? prefixSum[l-1] : 0);
        const rightSum = prefixSum[r] - prefixSum[mid];

        if(leftSum < rightSum) {
            score = Math.max(score, leftSum + solve(l,mid, prefixSum));
        } else if(leftSum > rightSum) {
            score = Math.max(score, rightSum + solve(mid + 1, r, prefixSum));
        } else {
            score = Math.max(score, leftSum + solve(l,mid, prefixSum), rightSum + solve(mid + 1, r, prefixSum));
        }
    }

    return t[l][r] = score;

}


var stoneGameV = function(stoneValue) {
    const n = stoneValue.length;

    t = new Array(n+1).fill(-1).map(()=>new Array(n+1).fill(-1));

    let prefixSum = new Array(n).fill(0);
    prefixSum[0] = stoneValue[0];

    for(let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] +  stoneValue[i]; 
    }

    return solve(0, n - 1, prefixSum);
};
