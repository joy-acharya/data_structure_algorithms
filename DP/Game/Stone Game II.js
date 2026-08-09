/*
  1140. Stone Game II
  LeetCode Link: https://leetcode.com/problems/stone-game-ii
  T.C: O(n^3)
  S.C: O(n^3)
*/

/**
 * @param {number[]} piles
 * @return {number}
 */

let n;
let t;

var solve = function(piles, person, i, M) {
    if(i >= n) return 0;

    if(t[person][i][M] != -1) return t[person][i][M];

    let stone = 0;

    let result = (person == 1) ? -1 : Infinity;

    for(let x = 1; x <= Math.min(2*M, n -i); x++) {
        stone += piles[i + x -1];
        if(person == 1) {
            result = Math.max(result, stone + solve(piles, 0, i + x, Math.max(M,x)));
        } else {
            result = Math.min(result, solve(piles, 1, i + x, Math.max(M,x)));
        }
    }

    return t[person][i][M] = result;
}


var stoneGameII = function(piles) {
    n = piles.length;
    t = new Array(2).fill(-1).map(()=>new Array(101).fill(-1).map(()=> new Array(101).fill(-1)));
    return solve(piles, 1, 0, 1);
};
