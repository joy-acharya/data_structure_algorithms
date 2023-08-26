/*
74. Search a 2D Matrix
leet code link : https://leetcode.com/problems/search-a-2d-matrix/
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let start = 0;
    let n = matrix[0].length;
    let m = matrix.length;
    let end = m * n -1;

    
    while(start <= end) {
        let mid = (start + end) >> 1;
        let row = Math.floor(mid / n);
        let col = mid % n;
        
        
        if(matrix[row][col] > target) {
            end = mid -1;
        } else if(matrix[row][col] < target) {
            start = mid + 1;
        } else {
            return true;
        }
    }
    
    return false;
};
