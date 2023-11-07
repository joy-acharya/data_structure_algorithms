/*
  1921. Eliminate Maximum Number of Monsters
  Leet Code Link : https://leetcode.com/problems/eliminate-maximum-number-of-monsters/
  Company Asked : Amazon, Meta, Google
  T.C : O(nlogn)
*/

/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    let time = [];
    
    let n = dist.length;
    
    for(let i = 0; i < n; i++) {
        time.push(Math.ceil(dist[i]/speed[i]));
    }
    
    time = time.sort((a,b)=>a-b);
    
    let timePass = 1;
    let count = 1;
    
    for(let i = 1; i < n; i++) {
        if(time[i] - timePass <= 0) {
            return count;
        }
        
        count++;
        timePass++;
    }
    
    return count;
};
