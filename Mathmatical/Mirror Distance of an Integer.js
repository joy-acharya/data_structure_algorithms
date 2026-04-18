/*
  3783. Mirror Distance of an Integer
  Leetcode Link: https://leetcode.com/problems/mirror-distance-of-an-integer/description/?envType=daily-question&envId=2026-04-18
*/


/**
  Solution 1  
  T.C : O(log n)
  S.C : O(log n)
*/
var mirrorDistance = function(n) {
    return Math.abs(n - parseInt(n.toString().split('').reverse().join('')));
};


/**
  Solution 2
  T.C : O(log n)
  S.C : O(1) 
*/
var mirrorDistance = function(n) {
    let result = 0;
    const N = n;

    while(n) {
        const rem = parseInt(n % 10);
        result = (result * 10) + rem;
        n = parseInt(n / 10);
    }

    return Math.abs(N - result);
};
