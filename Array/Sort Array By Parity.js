/*
  905. Sort Array By Parity
  Leet code link: https://leetcode.com/problems/sort-array-by-parity/
  Company Asked: Meta
*/

/*  Approach 1 */
var sortArrayByParity = function(nums) {
    nums.sort(customSort);
    return nums;
};

function customSort(a, b) {
  const isEven = num => num % 2 === 0;
  
  if (isEven(a) && !isEven(b)) {
    return -1;
  } else if (!isEven(a) && isEven(b)) {
    return 1;
  } else {
    return a - b;
  }
}

/*  Approach 2 */

var sortArrayByParity = function(nums) {
    let n = nums.length;
    let result = new Array(n).fill(0);
    let first = 0;
    let last = n -1;
    
    for(let i = 0; i < n; i++) {
        if(nums[i] % 2 == 0) {
            result[first] = nums[i];
            first++;
        } else {
            result[last] = nums[i];
            last--;
        }
    } 
    return result;
};

/*  Approach 3 */

var sortArrayByParity = function(nums) {
    let oddAry = [];
    let evenAry = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 0)
            evenAry.push(nums[i]);
        else
            oddAry.push(nums[i]);
    }
    
    return [...evenAry, ...oddAry];
};

/*  Approach 4 */

var sortArrayByParity = function(nums) {
    let j = 0;
    for(let i = j; i < nums.length; i++) {
       if(nums[i] % 2 == 0) {
           let tmp = nums[j];
           nums[j] = nums[i];
           nums[i] = tmp;
           j++
       }
    }
    return nums;
};
