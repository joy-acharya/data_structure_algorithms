/*
      1637. Widest Vertical Area Between Two Points Containing No Points
      Leet Code Link : https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
      Company Asked : Google
      T.C : O(nlogn)
      S.C : O(1)
*/



/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b)=>a[0]-b[0]);
    
    const n = points.length;
    
    let maxW = 0;
    
    for(let i = 1; i < n; i++) {
        maxW = Math.max(maxW, (points[i][0] - points[i-1][0]));
    }
    
    return maxW;
};
