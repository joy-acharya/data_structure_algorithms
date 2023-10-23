/*
    342. Power of Four
    Leet Code Link : https://leetcode.com/problems/power-of-four/
    Company asked : Two Sigma
*/

/* Approach 1  T.C : O(n) */

var isPowerOfFour = function(n) {
   if(n == 0)
       return false;
    
    while(n % 4 == 0) {
        n /= 4;
    }
   
    if(n == 1)
        return true;
    return false;
};

/* Approach 2  T.C : O(log4(n)) */

var isPowerOfFour = function(n) {
    if(n <= 0)
        return false;
    
    let x = Math.ceil(Math.log(n) / Math.log(4));
    
    if(Math.pow(4, x) == n)
        return true;
    return false;  
};
