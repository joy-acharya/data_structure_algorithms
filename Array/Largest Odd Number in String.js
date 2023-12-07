/*
    1903. Largest Odd Number in String
    Leet Code Link : https://leetcode.com/problems/largest-odd-number-in-string/
    T.C : O(n)
    S.C : O(1)
*/


/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    const n = num.length;
    
    if(parseInt(num[n-1]) % 2 != 0) {
        return num;
    }
    
    let stopIndex = -1;
    
    for(let i = n-1; i >= 0; i--) {
        if(parseInt(num[i]) % 2 != 0) {
            stopIndex = i;
            break;
        }
    }
    
    if(stopIndex == -1)
        return "";
    
    return num.substr(0, stopIndex + 1);
};
