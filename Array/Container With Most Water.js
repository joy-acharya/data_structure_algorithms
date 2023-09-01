/*
  11. Container With Most Water
  leet codee link : https://leetcode.com/problems/container-with-most-water/
*/


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length -1;
    let amount = 0;

    while(i < j) {
        amount = Math.max(amount, (j -i) * Math.min(height[i], height[j]));
        if(height[i] < height[j])
            i++
        else
         j--;
    }
    return amount;
};
