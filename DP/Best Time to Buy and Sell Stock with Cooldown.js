/*
  309. Best Time to Buy and Sell Stock with Cooldown
  leet code link = https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let dp = {};
    
    return find(0, n, 0, prices, dp);
};
let ans = 0;
var find = (i, n, flag, prices, dp) => {
    if(i >= n)
        return 0;
    if(dp[[flag, i]])
        return dp[[flag, i]];
    if(flag == false) {
        let buy = - prices[i] + find(i + 1, n, 1, prices, dp);
        let notbuy = find(i + 1, n, 0, prices, dp);
        ans = Math.max(buy, notbuy)
    } else {
        let sell = prices[i] + find(i + 2, n, 0, prices, dp);
        let notsell = find(i + 1, n, 1, prices, dp);
        ans = Math.max(sell, notsell)
    }
    dp[[flag, i]] = ans;
    return ans;
}
