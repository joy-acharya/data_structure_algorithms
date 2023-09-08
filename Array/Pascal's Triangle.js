/*
  118. Pascal's Triangle
  Leet Code Link : https://leetcode.com/problems/pascals-triangle/
  Company Asked : Adove, Amazone
  T.C : O(n^2)
*/


/* JavaScript */
 var generate = function(numRows) {
    let result = new Array(numRows).fill([]);
    for(let i = 0; i < numRows; i++) {
        result[i] = new Array(i+1).fill(1);
        for(let j = 1; j < i; j++) {
            result[i][j] = result[i-1][j] + result[i-1][j-1];
        }
    }
     return result;
};


