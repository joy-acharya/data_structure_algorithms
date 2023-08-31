/*
  1326. Minimum Number of Taps to Open to Water a Garden
  Leet code link : https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/
*/


/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    let startEnd = new Array(n + 1).fill(-1);
    
    for(let i = 0; i < ranges.length; i++) {
        let start = Math.max(0, i - ranges[i]);
        let end = Math.min(n, i + ranges[i]);
        startEnd[start] = Math.max(startEnd[start], end);
    }
    
    let taps = 0;
    let maxEnd = 0;
    let curEnd = 0;
    
    for(let i = 0; i <= n; i++) {
        if(i > maxEnd) {
            return -1;
        }
        
        if(i > curEnd) {
            taps++;
            curEnd = maxEnd;
        }
        maxEnd = Math.max(maxEnd, startEnd[i]);
    }
    
    return taps;
    
};
