/*
    3499. Maximize Active Section with Trade I
    LeetCode Link: https://leetcode.com/problems/maximize-active-section-with-trade-i
    T.C: O(n)
    S.C: O(n)
*/


/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    let activeCount = 0;

    const n = s.length;

    for(let i = 0; i < n; i++) {
        if(s[i] == '1') activeCount++;
    }

    let i = 0;

    let inactiveBlock = [];

    while(i < n) {
        if(s[i] == '0') {
            let start = i;

            while(i < n && s[i] == '0') i++;
            inactiveBlock.push(i - start);
        } else {
            i++;
        }
    }

    let maxSum = 0;

    for(let i = 1; i < inactiveBlock.length; i++) {
        maxSum = Math.max(maxSum, inactiveBlock[i] + inactiveBlock[i-1])
    }

    return maxSum + activeCount; 

};
