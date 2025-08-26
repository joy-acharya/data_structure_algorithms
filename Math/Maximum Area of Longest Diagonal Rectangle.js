/*
  3000. Maximum Area of Longest Diagonal Rectangle
  LeetCode link: https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle
  T.C : O(n)
  S.C : O(1)
*/

/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    const m = dimensions.length;

    let maxArea = 0;
    let maxDiag = 0;

    for(let i = 0; i < m ; i++) {
      const l = dimensions[i][0];
      const w = dimensions[i][1];

      const diag = Math.sqrt(l*l + w * w);
      const area = l * w;

      if(diag > maxDiag) {
        maxDiag = diag;
        maxArea = area
      } else if(diag == maxDiag) {
        maxArea = Math.max(maxArea, area);
      }
    }

    return maxArea;

  
};
