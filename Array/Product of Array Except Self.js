/*
  238. Product of Array Except Self
  Leet Code Link : 238. Product of Array Except Self
  Asked By : Linkdin, Apple , Amazon, Microsoft , Meta  
*/


/* 
    Technique 1
    T.C : O(n)
    S.C : O(n)
*/

var productExceptSelf = function(nums) {
        let left = new Array(nums.length);
        let right = new Array(nums.length);
        left[0] = 1;
        for (let i = 1; i < nums.length; i++) {
            left[i] = left[i-1] * nums[i-1];
        }
        
        right[nums.length - 1] = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            right[i] = right[i+1] * nums[i+1];
        }
        
        let product = new Array(nums.length);
        for (let i = 0; i < product.length; i++) {
            product[i] = left[i] * right[i];
        }
        return product;
    
};



/* 
    Technique 2
    T.C : O(n)
    S.C : O(1)
*/


var productExceptSelf = function(nums) {
    
    let n = nums.length;
    
 
    let ans = new Array(n).fill(1);
    
    for(let i = 1; i < n; i++) {
       ans[i] = nums[i-1] * ans[i-1]; 
    }
    
    let rightP = 1;
    
    for(let i = n-1; i >= 0; i--) {
       ans[i] = ans[i] * rightP;
        rightP *= nums[i];
    }

    return ans;
};
