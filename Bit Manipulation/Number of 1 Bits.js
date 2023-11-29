/*
  191. Number of 1 Bits
  Leet Code Link : https://leetcode.com/problems/number-of-1-bits/
  Company Asked : Apple , Microsoft, Amazon
  T.C : O(1)
  S.C : O(1)
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {

    let a = n , count = 0;
    while(a!=0)
    {
        count++;
        a=a&(a-1);
    }
    return count;
};
