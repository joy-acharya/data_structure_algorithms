/*
  1503. Last Moment Before All Ants Fall Out of a Plank
  Leet Code Link : https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/
  Company Asked : Google
  T.C : O(n)
  T.C : O(1)
*/

var getLastMoment = function(n, left, right) {
    let result = 0;
    
    for(let i = 0; i < left.length; i++) {
        result = Math.max(result, left[i])
    }
    
    for(let i = 0; i < right.length; i++) {
        result = Math.max(result, n - right[i])
    }
    
    return result;
};
