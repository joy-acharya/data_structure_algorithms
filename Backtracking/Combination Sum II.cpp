/*
  40. Combination Sum II
  Leet Code Link: https://leetcode.com/problems/combination-sum-ii/
  Company Asked: Adobe, Amazon, Microsoft
   T.C : O(N*target)
*/


class Solution {
public:
    void solve(vector<int>& candidates, int target, vector<int>& cur, vector<vector<int>>& result, int idx) {
        if(target == 0) {
            result.push_back(cur);
            return;
        }
        if(target < 0)
            return;
        
        for(int i = idx; i < candidates.size(); i++) {
            if(i > idx && candidates[i] == candidates[i-1])
                continue;
            cur.push_back(candidates[i]);
            solve(candidates, target-candidates[i], cur, result, i+1);
            cur.pop_back();
        }
    }
    
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        vector<int> cur;
        vector<vector<int>> result;
        sort(candidates.begin(),candidates.end());
        solve(candidates, target, cur, result, 0);
        return result;
    }
};
