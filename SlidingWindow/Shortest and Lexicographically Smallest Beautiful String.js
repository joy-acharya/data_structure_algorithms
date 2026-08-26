/*
  2904. Shortest and Lexicographically Smallest Beautiful String
  LeetCode Link: https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string
  T.C: O(n)
  S.C: O(1)
*/


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let n = s.length;

    let i = 0;
    let j = 0;

    let count = 0;
    let result = '';

    while ( j < n) {
        let item = s[j];

        if(item == '1') {
            count++;
        }

        while(i < j && (count > k || s[i] == '0')) {
            let item = s[i];
            if(item == '1') {
                count--;
            }
            i++;
        }


        if(count == k) {
            let element = s.substr(i, j-i+1);

            if(result.length == 0 || j-i+1 < result.length || (result.length == element.length && element < result)) {
                result = element;
            }  
        }

        j++;
    }

    return result;
};
