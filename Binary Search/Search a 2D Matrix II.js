/* 
 240. Search a 2D Matrix II
 Leet code link : https://leetcode.com/problems/search-a-2d-matrix-ii/
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    let row = 0;
    let col = cols - 1;

    while (row < rows && col >= 0) {
        const currentValue = matrix[row][col];

        if (currentValue === target) {
            return true;
        } else if (currentValue < target) {
            row++;
        } else {
            col--;
        }
    }

    return false;
};
