/*
  1155. Number of Dice Rolls With Target Sum
  Leet Code Link : 1155. Number of Dice Rolls With Target Sum
  Company : Amazone, Microsoft, Google, Apple
  T.C : 0(n*target*k)
  S.C : O(1)
*/


/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    var solve = function(n,k,target, t) {
        if(target < 0) {
            return 0;
        }
        
        if(n == 0) {
            return target == 0;
        }
        
        if(t[n][target] != undefined) {
            return t[n][target];
        }
        
        let ways = 0;
        
        for(let i = 1; i <= k; i++ ) {
            ways = (ways + solve(n-1, k, target - i, t)) % 1000000007;
        }
        
        return t[n][target] = ways;
    } 
    
    let t = new Array(n+1).fill(undefined).map(()=> new Array(target + 1).fill(undefined));
    
    return solve(n,k,target, t);
};
