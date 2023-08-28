/*
  403. Frog Jump
  leet code link : https://leetcode.com/problems/frog-jump/
*/


/**
 * @param {number[]} stones
 * @return {boolean}
 */

var canCross = function(stones) {
    let n = stones.length;
    let map = {};
    
    if(stones[1] != 1)
        return false;
    
    for(let i = 0; i < n; i++) {
        map[stones[i]] = i;
    }
    
    let dp = new Array(n + 1).fill(-1).map(() => new Array(n + 1).fill(-1));
    return solve(0,0,stones,map,dp);
};


var solve = function(cs, prevJump, stones, map,dp) {
    
    if(cs == stones.length - 1) {
        return true;
    }

   if(dp[cs][prevJump] != -1)
       return dp[cs][prevJump];
    
    let res = false;
    
    for(let nextJump = prevJump -1; nextJump <= prevJump + 1; nextJump++) {
        if(nextJump > 0) {
            let next_stone = stones[cs] + nextJump;
            if(map[next_stone]) {
                res = res || solve(map[next_stone], nextJump, stones, map,dp);
            }
        }
    }
    return  dp[cs][prevJump] = res;
}
