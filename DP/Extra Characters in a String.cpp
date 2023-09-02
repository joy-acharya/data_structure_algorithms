/*
  2707. Extra Characters in a String
  Leet code link : https://leetcode.com/problems/extra-characters-in-a-string/

  T.C. : O(n^2)

*/

class Solution {
public:
    int n;
    unordered_set<string> st;
    int t[51];
    int solve(int idx, string &s) {
        if(idx >= n) {
            return 0;
        }
        
        int minExtra = n;
        string str = "";
        
        if(t[idx] != -1)
            return t[idx];
        
        for(int i = idx; i < n; i++) {
            str.push_back(s[i]);
            int curExtra = (st.find(str) == st.end()) ? str.length() : 0;
            int rExtra = solve(i+1, s);
            int total = curExtra + rExtra;
            minExtra = min(minExtra, total);
        }
        
        return t[idx] = minExtra;
    }
    
    int minExtraChar(string s, vector<string>& dictionary) {
        n = s.length();
        memset(t, -1, sizeof(t));
        for(string &word : dictionary) {
            st.insert(word);
        }
        return solve(0, s);
    }
};
