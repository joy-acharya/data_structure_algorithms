/*
  2849. Determine if a Cell Is Reachable at a Given Time
  Leet Code Link : https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/
  T.C : O(1)

*/

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    
    const v = Math.abs(sx - fx);
    const h = Math.abs(sy - fy);
    
    if(v == 0 && h == 0 && t == 1)
        return false;
    
    const minTime = Math.max(v,h);
    
    if(t < minTime)
        return false;
    return true;
};
