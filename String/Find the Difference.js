/*
    389. Find the Difference
    Leet code link : https://leetcode.com/problems/find-the-difference/
    Company Asked : Facebook, Instragram, Twiter
    
*/

// T.C : O(n) ---------- C++
class Solution {
public:
    char findTheDifference(string s, string t) {
        int XOR = 0;
        
        for (char &ch: t)
            XOR ^= ch;
        
        for (char &ch: s)
            XOR ^=ch;
        
        return (char)XOR;
    }
};


//T.C : O(log(s) * log(t) * S) --------------- Js
var findTheDifference = function(s, t) {
    const S = s.split('').sort();
    const T = t.split('').sort();
    for(let i = 0; i < S.length; i++) {
        if (S[i] != T[i]) {
            return T[i];
        }
    }
    
    return T[T.length - 1];
};
