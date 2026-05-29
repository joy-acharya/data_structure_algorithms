/*
  3300. Minimum Element After Replacement With Digit Sum
  Leetcode link: https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/description/?envType=daily-question&envId=2026-05-29
  T.C : O(n)
  S.C : O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var minElement = function(nums) {
    let minSum = Infinity;
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        let element = nums[i];
        let sum = 0;
      
        while (element > 0) {
            sum += element % 10;
            element = (element / 10) | 0;
        }

        if (sum < minSum) {
            minSum = sum;
        }
    }

    return minSum;
};
