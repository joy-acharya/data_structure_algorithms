/*
  91. Decode Ways
  Leet Code Link : https://leetcode.com/problems/decode-ways/
  Company : Google, Facebook, Microsoft, Uber
  T.C : O(n)
  S.C : O(1)
*/


/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    
    var decodeRec = function (i,s,n,t) {
        if(i == n) {
            return 1;
        }
        
        if(s[i] == '0') {
            return 0;
        }
        
        if(t[i] != -1)
            return t[i];
        
        let result = decodeRec(i+1,s,n,t);
          
        if (i + 1 < n && (s[i] == '1' || (s[i] == '2' && s[i + 1] <= '6'))) {
            result += decodeRec(i+2,s,n,t);
        }
      
        return t[i] = result;
    }
    const t = new Array(s.length).fill(-1);
    return decodeRec(0,s,s.length,t);
};
