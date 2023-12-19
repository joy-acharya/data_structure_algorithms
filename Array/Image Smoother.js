/*
  661. Image Smoother
  Leet Code Link : https://leetcode.com/problems/image-smoother/
  Company Asked : Amazon
  T.C : O(m*n)
  S.C : O(m*n)
*/


/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
  
    const dir = [ 
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 0], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ]
    
    
    const m = img.length;
    const n = img[0].length;
    
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let sum = 0;
            let count = 0;
            
            for(const lt of dir) {
                let _i = i + lt[0];
                let _j = j + lt[1];
                
                if(_i >= 0 && _i < m && _j >= 0 && _j < n) {
                    sum += img[_i][_j];
                    count++;
                }
            }
            
            result[i][j] = Math.floor(sum / count);
        }
    }
    
    return result;
    
};
