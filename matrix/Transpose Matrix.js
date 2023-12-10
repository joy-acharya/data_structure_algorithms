/*
  867. Transpose Matrix
  Leet Code Link : https://leetcode.com/problems/transpose-matrix/
  Company Asked : makemytrip, amazon, wipro, InfoEdge
  T.C : O(m*n);
  S.C : O(n)
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let result = new Array(m).fill(m).map(()=>new Array(n).fill(0));
    
    for(let i = 0; i < n ; i++) {
        let tmp = matrix[i];
        for(let j = 0; j < tmp.length; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    
    
    return result;
};
