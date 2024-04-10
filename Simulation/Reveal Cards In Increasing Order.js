/*
  950. Reveal Cards In Increasing Order
  Leet code link : https://leetcode.com/problems/reveal-cards-in-increasing-order/
  T.C : O(nlogn)
  S.C : O(n)
*/


/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    let n = deck.length;
    
    deck.sort((a,b)=>a-b);
    
    let result = new Array(n).fill(0);
    
    let i = 0;
    let j = 0;
    
    let skip = false;
    
    while(i < n) {
        if(result[j] == 0) {
            if(skip == false) {
                result[j] = deck[i];
                i++;
            }
            
            skip = !skip;
        }
        
        j = (j + 1) % n;
    }
    
    return result;
};
