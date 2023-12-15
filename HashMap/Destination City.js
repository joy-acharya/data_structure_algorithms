/*
    1436. Destination City
    Leet Code Link : https://leetcode.com/problems/destination-city/
    T.C : O(n)
    S.C : O(n)
*/



/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let map = {};
    
    const n = paths.length;
    
    for(let i = 0; i < n ; i++) {
        map[paths[i][0]] = (map[paths[i][0]] || 0) + 1;
    }
    
    for(let i = 0; i < n ; i++) { 
        if(!map[paths[i][0]])
            return paths[i][0]
        if(!map[paths[i][1]])
            return paths[i][1];
    }
};
