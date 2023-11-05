/*
  1535. Find the Winner of an Array Game
  Leet Code Link : https://leetcode.com/problems/find-the-winner-of-an-array-game/
  T.C : O(n)
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let i = 0;
    let map = {};
    
    const max = Math.max(...arr);
     
    if(k > arr.length)
        return max;
    let winner = arr[0];
    let win = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > winner) {
            winner = arr[i];
            win = 1;
        } else {
            win++;
        }
        
        if(win == k || winner == max)
            return winner;
    }
    
    retrun -1;
};
