/*
 leetcode link : https://leetcode.com/problems/maximum-length-of-pair-chain/submissions/
 T : o(n^2)
*/


class Solution {
public:
    int n;
    int t[1001][1001];
    int lis(int prev, int cur, vector<vector<int>>& pairs) {
        if(cur == n)
            return 0;
        if(prev != -1 && t[prev][cur] != -1)
            return t[prev][cur];
        int taken = 0;
        if(prev == -1 || pairs[cur][0] > pairs[prev][1])
            taken = 1 + lis(cur, cur + 1, pairs);
        
        int not_taken =  lis(prev, cur + 1, pairs);
        if(prev != -1)
            t[prev][cur] = max(taken, not_taken); 
        return max(taken, not_taken);
    }
    
    int findLongestChain(vector<vector<int>>& pairs) {
        n = pairs.size();
        memset(t, -1, sizeof(t));
        sort(begin(pairs), end(pairs));
        return lis(-1, 0, pairs);
    }
};
