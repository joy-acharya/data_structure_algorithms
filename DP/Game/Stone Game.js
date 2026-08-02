/*
  877. Stone Game
  LeetCode Link: https://leetcode.com/problems/stone-game
*/

/*
  Approach 1
  T.C: O(n^2)
  S.C: O(n^2)
*/


/**
 * @param {number[]} piles
 * @return {boolean}
 */

var solve = function(i, j, piles, t) {
    if(i > j) return 0;
    if(i == j) return piles[i];

    if(t[i][j] != -1)
        return t[i][j];

    let take_i = piles[i] + Math.min(solve(i+2, j, piles, t), solve(i+1,j-1, piles, t));
    let take_j = piles[j] + Math.min(solve(i+1, j-1, piles, t), solve(i,j-2, piles, t));

    return t[i][j] = Math.max(take_i, take_j); 
}

var stoneGame = function(piles) {
    const n = piles.length;
    let t = new Array(n).fill(-1).map(()=>new Array(n).fill(-1));
    let sum = 0;
  
    for(let i = 0; i < n; i++) {
        sum += piles[i];
    }

    let alice = solve(0, n-1, piles, t);
    let bob = sum - alice;

    return alice > bob; 
};


/*
  Approach 2 
  T.C: O(1)
  S.C: O(1)
*/

/**
 * @param {number[]} piles
 * @return {boolean}
 */

var stoneGame = function(piles) {
    return true;
};
