/*
  1861. Rotating the Box
  Leetcode Link: https://leetcode.com/problems/rotating-the-box/description/?envType=daily-question&envId=2026-05-06
  T.C : O(col * row * row)
  S.C : O(n)
*/


/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    const m = boxGrid.length;
    const n = boxGrid[0].length;

    let mat = new Array(n).fill(0).map(()=> new Array(m).fill(0));

    for(let i = 0; i < m; i ++) {
        for(let j = 0; j < n; j++) {
            mat[j][i] = boxGrid[i][j];
        }
    }

    for(let i = 0; i <n ; i++) {
        mat[i].reverse();
    }

    for(let j = 0; j < m; j++) {
        for(let i = n - 1; i >= 0; i--) {
            if(mat[i][j] == '.') {
                let stoneRow = -1;

                for(let k = i - 1; k >= 0; k--) {
                    if(mat[k][j] == '*') {
                        break;
                    } else if(mat[k][j] == '#') {
                        stoneRow = k;
                    }
                }

                if(stoneRow != -1) {
                    mat[i][j] = '#';
                    mat[stoneRow][j] = '.'
                }
            }
        }
    }
    
    return mat;
};
