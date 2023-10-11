/*
  2251. Number of Flowers in Full Bloom
  Leet Code Link : https://leetcode.com/problems/number-of-flowers-in-full-bloom/
  Company Asked : Meta
  T.C. : O((m+n)log(n))
  S.C. : O(m)
*/

/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    let m = flowers.length;
    let n = people.length;
    
    let startAry = [];
    let endAry = [];
    
    for(let i = 0; i < m; i++) {
        startAry.push(flowers[i][0]);
        endAry.push(flowers[i][1]);
    }
    
    startAry = startAry.sort((a,b)=>a-b);
    endAry = endAry.sort((a,b)=>a-b);
    let result = [];
    for(let i = 0; i < n; i++) {
        let x = upperBound(startAry, people[i]);
        let y = lowerBound(endAry, people[i]);
        result.push(x-y);
    }
    
    return result;
    
};



var upperBound = function(startAry, target) {
    let l = 0;
    let r = startAry.length - 1;
    let result = -1;
    
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        
        if(startAry[mid] > target) {
            result = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    
    return result == -1 ? startAry.length : result;
}

var lowerBound = function(endAry, target) {
    let l = 0;
    let r = endAry.length - 1;
    let result = -1;
    
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        
        if(endAry[mid] >= target) {
            result = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    
    return result == -1 ? endAry.length : result;
}
