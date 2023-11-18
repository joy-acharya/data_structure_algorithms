/*
  1838. Frequency of the Most Frequent Element
  Leet Code Link : 1838. Frequency of the Most Frequent Element
  Company Asked : Meta
  T.C : O(nlogn)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    let prefixSum = new Array(n).fill(-1);
    prefixSum[0] = nums[0];
    
    for(let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i];
    }
    
    let result = 0;
    
    for(let i = 0; i < n; i++) {
        let freq = findBest(i, k, nums, prefixSum);
        result = Math.max(result, freq);
    }
    
    return result;
    
};


function findBest(targetIdx, k, nums, prefixSum) {
    const target = nums[targetIdx];
    
    let i = 0;
    let j = targetIdx;
    let result = targetIdx;
    
    while (i <= j) {
        const mid = i + Math.floor((j - i) / 2);
        
        const count = targetIdx - mid + 1;
        const windowSum = count * target;
        const currSum = prefixSum[targetIdx] - prefixSum[mid] + nums[mid];
        
        const ops = windowSum - currSum;
        
        if (ops > k) {
            i = mid + 1;
        } else {
            result = mid;
            j = mid - 1;
        }
    }
    
    return targetIdx - result + 1;
}
