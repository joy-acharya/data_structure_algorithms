/*
  2038. Remove Colored Pieces if Both Neighbors are the Same Color
  Leet Code Link : https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
  Company Asked : Google
  T.C: O(n)
*/

var winnerOfGame = function(colors) {
    let alice = 0;
    let bob = 0;
    
    for(let i = 1; i < colors.length - 1; i++) {
        if(colors[i-1] == 'A' && colors[i] == 'A' && colors[i+1] == 'A')
            alice++;
        if(colors[i-1] == 'B' && colors[i] == 'B' && colors[i+1] == 'B')
            bob++;
    }
    
    return alice > bob;
};
