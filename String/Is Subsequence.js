/*
    392. Is Subsequence
    Leet Code Link : https://leetcode.com/problems/is-subsequence/
    Company Asked : Amazon
*/

///////////Approach 1 Javascript  /// T.C : O(n)///////////////
var isSubsequence = function(s, t) {
    let first = s[0];
    let cnt = 0;
    for(let i = 0; i < t.length; i++) {
        if(first == t[i]) {
            cnt++;
            first = s[cnt];
        }
    }

    if(cnt == s.length)
        return true;
    return false;
};


///////////Approach 2 : C++  /// T.C : O(mlog(n))///////////////


class Solution {
public:
    bool isSubsequence(string s, string t) {
        map<char, vector<int>> mp;
        for(int i = 0; i<t.length(); i++) {
            char ch = t[i];
            mp[ch].push_back(i);
        }
        
        int prev = -1;
        for(char &ch : s) {
            if(mp.find(ch) == mp.end())
                return false;
            vector<int> indices = mp[ch];
            auto it = upper_bound(begin(indices), end(indices), prev);
            if(it == indices.end())
                return false;
            prev = *it;
        }
        return true;
    }
};
