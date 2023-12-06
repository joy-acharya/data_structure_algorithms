/*
  1716. Calculate Money in Leetcode Bank
  Leet Code Link : https://leetcode.com/problems/calculate-money-in-leetcode-bank/
  T.C : O(n)
*/

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let p = 1;
    
    let m = 1;
    
    let result = 0;
    
    let cnt = 0;
    
    for(let i = 1; i <= n; i++) {
        result += m;
        m++;
        cnt++;
        
        if(cnt == 7) {
            p++;
            m = p;
            cnt=0;
        }
        
    }
    return result;
    
};
