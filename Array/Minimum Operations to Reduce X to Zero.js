/*
  1658. Minimum Operations to Reduce X to Zero
  Leet Code Link : https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
  Company Asked : Amazone
*/  

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let n = nums.length;
    let sum = 0;
    
    let map = {};
    
    map[0] = -1;
    if(nums[0] == x || nums[n-1] == x)
        return 1;
    
    for(let i = 0;i < n ; i++) {
        sum += nums[i];
        map[sum] = i;
    }
    
    if(sum < x)
        return -1;
    
    let remSum = sum -x;
    let logSubAry = Number.MIN_SAFE_INTEGER;
    sum = 0;
    
    for(let i = 0; i < n ; i++) {
        sum += nums[i];
        let findSum = sum - remSum;
        if(map[findSum]) {
            let idx = map[findSum];
            logSubAry = Math.max(logSubAry,i-idx);
        }
    }
    return logSubAry == Number.MIN_SAFE_INTEGER ? -1 : (n - logSubAry);
    
};
