/*
  1614. Maximum Nesting Depth of the Parentheses
  Leet code link : https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
  Asked By : 
*/


/* Technique 1 
  T.C : O(n);
  S.C : O(n)
*/


var maxDepth = function(s) {
    let n = s.length;
    let stk = [];
    let result = 0;
    
    for(let i = 0; i < n; i++) {
        if(s[i] == '(') {
            stk.push('(');
            result = Math.max(result, stk.length);
        } else if(s[i] == ')') {
            stk.shift();
        }
    }
    
    return result;
};



/* Technique 2
  T.C : O(n);
  S.C : O(1)
*/

var maxDepth = function(s) {
    let n = s.length;
    let openbrackets = 0;
    let result = 0;
    
    for(let i = 0; i < n; i++) {
        if(s[i] == '(') {
            openbrackets++;
            result = Math.max(result, openbrackets);
        } else if(s[i] == ')') {
           openbrackets--;
        }
    }
    
    return result;
};




