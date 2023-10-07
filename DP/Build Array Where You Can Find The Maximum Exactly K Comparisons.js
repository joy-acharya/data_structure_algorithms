/*
  1420. Build Array Where You Can Find The Maximum Exactly K Comparisons
  Leet Code Link : https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/
  T.C : O(n*m*k);
*/

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
let M,N,K;
let MOD = 1000000007;
var numOfArrays = function(n, m, k) {
    M = m;
    N = n;
    K = k;
    let dp = new Array(51).fill(-1).map(()=> new Array(51).fill(-1).map(()=> new Array(101).fill(-1)));
    return solve(0, 0, 0, dp);
};

var solve = function(idx, searchCost, maxVal, dp) {
    //base case 
    if(idx == N) {
        if(searchCost == K)
            return 1;
        return 0;
    }
    
    if(dp[idx][searchCost][maxVal] != -1)
        return dp[idx][searchCost][maxVal];
    
    let result = 0;
    for(let i = 1; i <= M; i++) {
        if(i > maxVal) {
            result = (result + solve(idx+1, searchCost + 1, i, dp)) % MOD;
        } else {
            result = (result + solve(idx+1, searchCost, maxVal, dp)) % MOD;
        }
    }
    
    return dp[idx][searchCost][maxVal] = (result % MOD);
    
}
