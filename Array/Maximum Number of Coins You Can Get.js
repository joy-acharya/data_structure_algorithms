/*
  1561. Maximum Number of Coins You Can Get
  Leet Code Link : https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
  T.C : O(nlogn)
  S.C : O(1)
*/


/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    
    const n = piles.length;
    let i = 0;
    let j = n - 1;
    let result = 0;
    piles.sort((a,b)=> a-b);
    
    while(i <= j) {
        j--;
        result += piles[j--];
        i++;
    }
    
    return result;
    
};
