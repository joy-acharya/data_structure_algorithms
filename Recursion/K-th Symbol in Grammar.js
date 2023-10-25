/*
  779. K-th Symbol in Grammar
  Leet Code Link : https://leetcode.com/problems/k-th-symbol-in-grammar/
  Company Asked : Google;
  T.C : O(n)
  S.C : O(n)
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    if(n == 1 && k == 1)
        return 0;
    let length = Math.pow(2,n-1);
    let mid = Math.floor(length/2);
    
    if(k <= mid)
        return kthGrammar(n-1,k);
    
    return !kthGrammar(n-1,k-mid);
    
};
