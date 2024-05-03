/*
  165. Compare Version Numbers
  Leet code link : https://leetcode.com/problems/compare-version-numbers/
  T.C : O(m+n)
  S.C : O(m+n)
  Asked By : Microsoft, Apple
*/


/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let verAry1 = version1.split(".");
    let verAry2 = version2.split(".");
    
    let n1 = verAry1.length;
    let n2 = verAry2.length;
    
    var maxLan = n2 > n1 ? n2 : n1;
    
    for(let i = 0 ; i < maxLan; i++) {
        let item1 = verAry1[i];        
        let item2 = verAry2[i];

        
        if(item1 === undefined) item1 = 0;
        
        if(item2 === undefined) item2 = 0;
        
        item1 = parseInt(item1);
        item2 = parseInt(item2);   
        
        if(item1 > item2) return 1;  // condition check and return in same line. its just "nice" :)
        else if(item1 < item2) return -1;
    }
    
    
    return 0;
};
