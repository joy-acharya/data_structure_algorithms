/*
    1758. Minimum Changes To Make Alternating Binary String
    Leet Code Link : https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
    Company Asked: Microsoft
    T.C : O(n)
    S.C : O(1)
*/



/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let cnt_1 = 0, cnt_0 = 0;
    const n = s.length;

    for(let i = 0; i < n; i++) {
        if(i % 2 == 0) {
            if(s[i] == 0) {
                cnt_1++;
            } else {
                cnt_0++;
            }
        } else {
            if(s[i] == 1) {
                cnt_1++;
            } else {
                cnt_0++;
            }
        }
    }
    return Math.min(cnt_1, cnt_0);
};
