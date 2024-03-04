/*
  948. Bag of Tokens
  Leet Code Link : https://leetcode.com/problems/bag-of-tokens/
  Company Asked : Google
  T.C : O(nlog(n))
*/


/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a,b)=>a-b);
    let n = tokens.length;
    let gain = 0;
    let loss = n - 1;
    
    let maxScore = 0;
    let curScore = 0;
    
    while(gain <= loss) {
        let token = tokens[gain];
        
        if(power >= token) {
            curScore++;
            power = power - token;
            gain++;
        } else if(curScore >= 1) {
            power += tokens[loss];
            curScore--;
            loss--;
        } else {
            gain++;
        }
        
        maxScore = Math.max(maxScore, curScore);
    }
    
    return maxScore;
};
