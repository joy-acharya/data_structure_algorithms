
/*
  57. Insert Interval
  Leet code Link : https://leetcode.com/problems/insert-interval/
  T.C : O(n)
  S.C : O(n)
  Asked By : Amazon, Google, twitter, Apple , Microsoft
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = [];
    let i = 0;
    let n = intervals.length;
    for(i = 0; i < n; i++) {
        if(intervals[i][1] < newInterval[0]) {
           result.push(intervals[i]); 
        } else if(intervals[i][0] > newInterval[1]) {
            break;
        } else {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        }
    }
    
    result.push(newInterval);
    
    for(let j = i; j < n; j++) {
        result.push(intervals[j]);
    }
    
    return result;
};
