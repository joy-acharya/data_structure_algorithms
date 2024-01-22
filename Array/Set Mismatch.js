/*
  645. Set Mismatch
  Leet Code Link : https://leetcode.com/problems/set-mismatch/
  Company Asked : Amazon
*/


/* Approach 1 */
/* T.C : O(n); S.C : O(n) */

var findErrorNums = function(nums) {
    const n = nums.length;
    
    let arr = new Array(n).fill(0);
    let map = {};
    
    for(let i = 0; i < n; i++) {
        arr[i] = i + 1;
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
    
    let dup = 0 , miss = 0;
    
    for(let i = 0; i < n; i++) {
        if(map[arr[i]] === undefined) {
            miss = arr[i];
            continue;
        }
        
        if(map[arr[i]] > 1) {
            dup = arr[i];
        }
    }
    
    return [dup,miss];
};



/* Approach 2 */
/* T.C : O(n); S.C : O(1) */

var findErrorNums = function(nums) {
    const n = nums.length;
    let dup = 0 , miss = 0;
    
    for(let i = 0; i < n; i++) {
        let idx = Math.abs(nums[i]) - 1;
        let elm = nums[idx];
           
        if(elm < 0) {
            dup = Math.abs(nums[i]);        
        } else {
            nums[idx] = nums[idx] * (-1); 
        }
    }
    
    for(let i = 0; i < n; i++) { 
        if(nums[i] > 0) {
            miss = i + 1;
            break;
        }
    }
    
    
    return [dup,miss];
};





