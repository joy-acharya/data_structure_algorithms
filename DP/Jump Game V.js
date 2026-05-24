/*
  1340. Jump Game V
  Leetcode Link: https://leetcode.com/problems/jump-game-v/description/?envType=daily-question&envId=2026-05-24
  T.C : O(n*d)
  S.C : O(1)
*/

/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */

function solve(arr, i , d, t) {

    if(t[i] != -1) return t[i];
    let result = 1;

    // left

    for(let j = i - 1; j >= Math.max(0, i -d); j-- ) {
        if(arr[j] >= arr[i]) break;

        result = Math.max(result, 1 + solve(arr, j , d, t));
    }

    // right

    for(let j = i + 1; j <= Math.min(arr.length - 1, i + d); j++ ) {
        if(arr[j] >= arr[i]) break;

        result = Math.max(result, 1 + solve(arr, j , d, t));
    }

    return t[i] = result;
}

var maxJumps = function(arr, d) {
    let result = 1;
    const n = arr.length;

    let t = new Array(n + 1).fill(-1);

    for(let i = 0; i < n; i++) {
        result = Math.max(result, solve(arr, i, d, t));
    }

    return result;
};
