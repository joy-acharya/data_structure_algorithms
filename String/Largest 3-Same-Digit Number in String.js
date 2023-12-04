/*
  2264. Largest 3-Same-Digit Number in String
  Leet Code Link : https://leetcode.com/problems/largest-3-same-digit-number-in-string/
  T.C : O(n)
  S.C : O(1)
  Company Asked : NA
*/


/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let tmp = -1;
    for(let i = 2; i < num.length; i++) {
        if(num[i] == num[i-1] && num[i] == num[i-2]) {
            tmp = Math.max(tmp, num[i]);
        }
    }
    
    if(tmp == -1) {
        return '';
    }
    
    return tmp + '' + tmp + '' + tmp;

};
