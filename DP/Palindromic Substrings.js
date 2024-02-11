/*
    647. Palindromic Substrings
    Leet Code Link: https://leetcode.com/problems/palindromic-substrings/
    T.C : O(n^2)
    Company Asked : Google
*/

// Approach: 1.  S.C : O(n^2)


/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const n = s.length;
    let count = 0;
    
    let dp = new Array(n+1).fill(-1).map(()=>new Array(n+1).fill(-1));
    
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            if(check(s,i,j,dp)) {
                count++;
            }
        }
    }
    
    return count;
};


var check = function(s,i,j,dp) {
    if(i > j) {
        return true;
    }
    
    if(dp[i][j] != -1) {
        return dp[i][j];
    }
    
    if(s[i] == s[j]) {
        return dp[i][j] = check(s, i+1, j-1, dp);
    }
    
    return dp[i][j] = false;
}



// Approach: 2.  S.C : O(n^2)



/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const n = s.length;
    
    let count = 0;
    
    let dp = new Array(n+1).fill(false).map(()=>new Array(n+1).fill(false));
    
    
    
    for(let L = 1; L <= n; L++) {
        for(let i = 0; i + L - 1 < n; i++) {
            let j = i + L - 1;
            
            if(i == j) {
                dp[i][j] = true;
            } else if(i + 1 == j) {
                dp[i][j] = (s[i] == s[j]);
            } else {
                dp[i][j] = (s[i] == s[j] && dp[i+1][j-1]);
            }
            
            if(dp[i][j] == true) {
                count++;
            }
        }
    }

    return count;
};
