/*
      119. Pascal's Triangle II
      Leet Code Link : 119. Pascal's Triangle II
      Company Ased : Amazon
      T.C : O(rowIndex * rowIndex)
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let prev = [];
    for(let i = 0; i < rowIndex + 1; i++) {
        let cur = new Array(i+1).fill(1);
        for (let j = 1; j < i; j++) {
            cur[j] = prev[j] + prev[j-1];
        }
        prev = cur;
    }
    return prev;
};

