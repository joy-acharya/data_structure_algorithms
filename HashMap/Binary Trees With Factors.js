/*
  823. Binary Trees With Factors
  Leet Code Link : https://leetcode.com/problems/binary-trees-with-factors/
  Company Asked : Google
  T.C : O(n^2)
  S.C : O(n)
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    arr = arr.sort((a,b)=>a-b);
    let map = {};
    map[arr[0]] = 1;
    
    for(let i = 1; i < arr.length; i++) {
        let root = arr[i];
        let cnt = 1;
        for(let j = 0; j < i; j++) {
            let LC = arr[j];
            let RC = Math.floor(root/LC);
            
            if(root % LC == 0 && map[RC]) {
                cnt += (map[LC] * map[RC]);
            }  
        }
        map[root] = cnt;
    }
    
    let result = 0;
    const MOD = 10 ** 9 + 7;
    for(let k in map) {
        result = (result + map[k]) % MOD;
    }
    return result;
};
