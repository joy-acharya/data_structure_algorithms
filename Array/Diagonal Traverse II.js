/*
  1424. Diagonal Traverse II
  Leet Code Link : https://leetcode.com/problems/diagonal-traverse-ii/
  Company Aaked : Google
  T.C : O(n)
  S.C : O(n)
*/


/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let map = new Map();
    
    for(let row = nums.length - 1; row >= 0; row--) {
        for(let col = 0; col < nums[row].length; col++) {
            const diag = row + col;
            if(!map.has(diag)) {
                map.set(diag, []);
            } 
            map.get(diag).push(nums[row][col])
        }
    }
    
    let result = [];
    let diagonal = 0;
    
    while(map.has(diagonal)) {
        result.push(...map.get(diagonal));
        diagonal++;
    }
    
    return result;
};


