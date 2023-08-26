/*
 leet code link = https://leetcode.com/problems/longest-increasing-subsequence/
 t = 0(n^2)
*/

class Solution {
public:
    int n;
    int t[2501][2501];
    int solve(int prev, int cur, vector<int>& nums) {
        if(cur == n)
            return 0;
        int taken = 0;
        if(prev != -1 && t[prev][cur] != -1)
            return t[prev][cur];
        if(prev == -1 || nums[cur] > nums[prev])
            taken = 1 + solve(cur, cur + 1, nums);
        int not_taken = solve(prev, cur + 1, nums);
        if(prev != -1)
            t[prev][cur] = max(taken, not_taken);
        return max(taken, not_taken);
    }
    
    int lengthOfLIS(vector<int>& nums) {
        n = nums.size();
        memset(t, -1, sizeof(t));
        return solve(-1,0, nums);
    }
};
