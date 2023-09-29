/*
  896. Monotonic Array
  Leet Code Link : https://leetcode.com/problems/monotonic-array/
  Company Asked : Meta (3 times)
*/

/*  Approach 1 */

var isMonotonic = function(nums) {
    if(isSmaller(nums))
        return true;
    if(isGretter(nums))
        return true;
    return false;
    
};

var isSmaller = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        if(nums[i-1] <= nums[i])
            continue;
        else
            return false;
    }
    return true;
}


var isGretter = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        if(nums[i-1] >= nums[i])
            continue;
        else
            return false;
    }
    return true;
}



/* Approach 2 */


var isMonotonic = function(nums) {
    let inc = false;
    let dec = false;
    
    for(let i = 0; i < nums.length -1; i++) {
        if(nums[i] < nums[i+1])
            inc = true;
        if(nums[i] > nums[i+1])
            dec = true;
    }
    
    if(inc && dec)
        return false;
    return true;
};
