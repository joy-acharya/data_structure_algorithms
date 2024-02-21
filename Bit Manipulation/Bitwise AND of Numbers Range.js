/*
  201. Bitwise AND of Numbers Range
  Leet Code Link : https://leetcode.com/problems/bitwise-and-of-numbers-range/
  T.C : O(log(m))
  S.C : O(1)
*/


/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let bitCount = 0;
    
    while(left != right) {
        left = left >> 1;
        right = right >> 1;
        
        bitCount++
    }
    
    return left << bitCount;
};


// n & n-1 => find the right most set bit

// n & n -1 => helps to find no of set bit
 //  n = 5  => 101 => 2 set bit

// n & n - 1 => 101
               //100
              //-------
                //100

// n & n -1 => 100
              //011
              //----
              // 000
// it take two time to do the operation become 000
// so the result is 2

// power of 2 => if n > 0 && (n & n -1 == 0)


