/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 leet code link : https://leetcode.com/problems/coin-change-ii/
 */

var solve = function(i, n, amount, coins, dp) {
    if(dp[i][amount] != -1)
        return dp[i][amount];
    if(amount == 0) return 1;
    if(i > n) return 0;
    
    if(amount < coins[i])
        return dp[i][amount] = solve(i+1, n, amount, coins, dp);
    
    let take = solve(i, n, amount - coins[i], coins, dp);
    let skip = solve(i+1, n , amount, coins, dp);
    return dp[i][amount] = take + skip;
}


var change = function(amount, coins) {
    let dp = new Array(coins.length + 1).fill(-1).map(() => new Array(amount + 1).fill(-1));
    let n = coins.length - 1 ;
    return solve(0, n, amount, coins, dp);
};
