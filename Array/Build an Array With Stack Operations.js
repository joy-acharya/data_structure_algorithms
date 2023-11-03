/*
  1441. Build an Array With Stack Operations
  Leet Code Link : https://leetcode.com/problems/build-an-array-with-stack-operations/
  T.C : O(n)
  S.C : O(n)
*/

var buildArray = function(target, n) {
    let result = [];
    let i = 0;
    let stream = 1;
    
    while( i < target.length && stream <= n) {
        result.push('Push');
        if(stream == target[i]) {
            i++;
        } else {
            result.push('Pop');
        }
        stream++;
    }
    return result;
    
};
