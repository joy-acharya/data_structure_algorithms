/*
  2125. Number of Laser Beams in a Bank
  Leet Code Link : https://leetcode.com/problems/number-of-laser-beams-in-a-bank/
  Companay Aked : Amazon 
  T.C : O(n)
  S.C : O(1)
*/

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    const n = bank.length;
    
    let prev = 0;
    let result = 0;
    
    for(let i = 0; i < n; i++) {
        let cur = 0;
        
        for(let j = 0; j < bank[i].length; j++) {
             if(bank[i][j] == '1') {
                 cur++;
             }
        }
        
        result += prev * cur;
        
        if(cur != 0) {
            prev = cur;
        }
    }
    
    return result;
};
