/*
  2391. Minimum Amount of Time to Collect Garbage
  Leet Code Link : https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/
  T.C : O(n)
  S.C : O(1)
*/

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    
    let n = travel.length;
    
    for(let i = 1; i < n; i++) {
        travel[i] = travel[i-1] + travel[i];
    }
    
    n =  garbage.length;
    let mIdx = -1;
    let pIdx = -1;
    let gIdx = -1;
    
    let totalItem = 0;
    
    for(let i = 0; i < n; i++) {
        let items = garbage[i];
        items = items.split('');
        totalItem += items.length;
        
        items = [...new Set(items)];  // for unique item
        
        for(let j = 0; j < items.length; j++) {
            if(items[j] == 'M') {
                mIdx = i;
            } else if(items[j] == 'P') {
                pIdx = i;
            } else {
                gIdx = i;
            }
        }
    }
    

    if(mIdx > 0) {
      totalItem += travel[--mIdx]  
    }
    
    if(pIdx > 0) {
      totalItem += travel[--pIdx]  
    }
    
    if(gIdx > 0) {
      totalItem += travel[--gIdx]  
    }
    
    return totalItem;
    
};
