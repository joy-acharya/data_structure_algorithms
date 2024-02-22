/*
  997. Find the Town Judge
  Leet Code Link : https://leetcode.com/problems/find-the-town-judge/
  T.C : O(n)
  S.C : O(n)
*/

var findJudge = function(n, trust) {
    
    let arr = new Array(n+1).fill(0);
    
    for(let i = 0; i < trust.length; i++) {
        arr[trust[i][1]] += 1;
        arr[trust[i][0]] = -1;
    }
    
    for(let i = 1; i <= n+1 ; i++) {
        if(arr[i] == n-1) {
            return i;
        }
    }
    
    return -1;
};
