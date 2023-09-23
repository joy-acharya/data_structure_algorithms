/*
  1048. Longest String Chain
  Leetcode Link = https://leetcode.com/problems/longest-string-chain
  Company Asked : Google
  T.C : O(n^3) 
*/


class Solution {
public:
    int n;
    int t[1001][1001];
    static bool myFunc(string &word1, string &word2) {
        return word1.length() < word2.length();
    }
    
    bool isPred(string &word1, string &word2) {
        int M = word1.length();
        int N = word2.length();

        if(M >= N || N - M != 1) 
            return false;
        int i = 0, j = 0;
        while(i < M && j < N) {
            if(word1[i] == word2[j])
                i++;
            j++;
        }

        return i == M;
    }

    int lis (vector<string>& words, int prev, int crnt) {
        if(crnt == n)
            return 0;
        
        if(prev != -1 && t[prev][crnt] != -1)
            return t[prev][crnt];
        
        int taken = 0, not_taken = 0;
        
        if(prev == -1 || isPred(words[prev],words[crnt])) 
            taken = 1 + lis(words, crnt , crnt + 1);
        not_taken = lis(words, prev, crnt + 1);
        
        if(prev != -1)
             t[prev][crnt] = max(taken, not_taken);
        
        return max(taken, not_taken);
    }

    int longestStrChain(vector<string>& words) {
        n = words.size();
        sort(begin(words),end(words), myFunc);
        memset(t, -1, sizeof(t));
        return lis(words, -1, 0);   
    }
};
