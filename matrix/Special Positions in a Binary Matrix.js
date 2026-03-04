/*
  LeetCode link: https://leetcode.com/problems/special-positions-in-a-binary-matrix
  T.C : O(m*n)
  S.C : O(m+n)
*/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let rowA = new Array(m).fill(0);
    let colA = new Array(n).fill(0);

    for(let row = 0; row < m ; row ++) {
        for(let col = 0; col < n; col++) {
            if(mat[row][col] == 1) {
                rowA[row]++;
                colA[col]++;
            }
        }
    }

    let ans = 0;

    for(let row = 0; row < m ; row ++) {
        for(let col = 0; col < n; col++) {
            if(mat[row][col] == 1 && rowA[row] == 1 && colA[col] == 1) {
                ans++;
            }
        }
    }

    return ans;
};
