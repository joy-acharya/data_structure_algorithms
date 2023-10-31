/*
  2433. Find The Original Array of Prefix Xor
  Leet Code Link : https://leetcode.com/problems/find-the-original-array-of-prefix-xor/
  Company Asked : Microsoft
  T.C : O(n)
*/

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let arr = [];
    arr.push(pref[0]);
    
    for(let i = 1; i < pref.length; i++) {
        arr[i] = pref[i] ^ pref[i-1];
    }
    
    return arr;
};
