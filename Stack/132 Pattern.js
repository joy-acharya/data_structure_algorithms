/*
    456. 132 Pattern
    Leet Code Link : https://leetcode.com/problems/132-pattern/
    Company Asked : Meta,Amazone
    T.C. : O(n)
*/

var find132pattern = function(nums) {
    let n = nums.length;
    let num3 = Number.NEGATIVE_INFINITY;
    let stack = [];
    for(let i = n-1; i >=0; i--) {
        if(nums[i] < num3)
            return true;
        while(stack.length > 0 && stack[0] < nums[i]) {
            num3 = stack[0];
            stack.shift();
        }
        stack.unshift(nums[i])
    }
    
    return false;
};
