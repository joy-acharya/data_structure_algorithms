/*
  3871. Count Commas in Range II
  LeetCode Link: https://leetcode.com/problems/count-commas-in-range-ii
  T.C: O(log1000(n)) = O(1) // Because the loop runs only 5 times, as Constraints: 1 <= n <= 10^15
  S.C: O(1)
*/


/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let lower = 1000;
    let result = 0;
    let comma = 1;
    while(lower <= n) {
        let upper = (lower * 1000) - 1;
        if(upper > n)  upper = n;
        result += (upper - lower + 1) * comma;
        lower = upper + 1;
        comma++;
    }
    return result;
};
