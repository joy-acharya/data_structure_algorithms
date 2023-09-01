/*
    46. Permutations
    Leet code link : https://leetcode.com/problems/permutations/
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let result = [];
let tmp = [];
let n;
let st = new Set();
var permute = function(nums) {
    n = nums.length;
    dfs(tmp, nums);
    return result;
};


var dfs = (tmp, nums) => {
    if(tmp.length == n) {
        result.push(tmp);
        return;
    }
    
    for(let i = 0; i < n; i++) {
        if(!st.has(nums[i])) {
            tmp.push(nums[i]);
            st.add(nums[i]);
            dfs(tmp, nums);
            tmp = [];
            st.delete(nums[i]);
        }
    }
      
}
