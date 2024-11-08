Leetcode link : https://leetcode.com/problems/maximum-xor-for-each-query/
T.C : 0(n);
S.C : O(1)  // result variable is only used for store the result only.


/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    
    let zor = 0;
    
    let len = nums.length;
    
    for(let i = 0; i < len ; i++) {
        zor ^= nums[i];
    }
    
    
    const mask = (1<<maximumBit) - 1;
    
    let ans = [];
    
    for(let i = 0; i < len ; i++) {
        const k = zor ^ mask;
        ans.push(k);
        
        zor = (zor ^ nums[len -1 -i]);
    }
    
    return ans;
    
};
