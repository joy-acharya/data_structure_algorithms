/*
  326. Power of Three
  Leetcode link: https://leetcode.com/problems/power-of-three/description/
  Company asked: Google
*/

// solution 1
//T.C : O(log3(n))
//S.C : O(1)

var isPowerOfThree = function(n) {
    if(n <= 0) return false;
    while(n % 3 == 0) n /= 3;
    return n == 1;
};

// solution 2
//T.C : O(log3(n))
//S.C : O(1)
var isPowerOfThree = function(n) {
    if(n <= 0) return false;
    if(n == 1) return true;
    return n % 3 == 0 && isPowerOfThree(n/3);
};

// solution 3
//T.C : O(1)
//S.C : O(1)
var isPowerOfThree = function(n) {
    if(n <= 0) return false;
    if(n == 1) return true;

    let x = Math.log10(n) / Math.log10(3);
  
    return x === parseInt(x);
};

// Solution 4
//T.C : O(1)
//S.C : O(1)

var isPowerOfThree = function(n) {
    return n > 0 && 1162261467 % n == 0;
};

