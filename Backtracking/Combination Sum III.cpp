/*
  40. Combination Sum II
  Leet Code Link: https://leetcode.com/problems/combination-sum-ii/
  Company Asked: Adobe, Amazon, Microsoft
   T.C : O(N*target)
*/

class Solution {
public:
    
        void solve(vector<int>& candidates, int k, int target, vector<int>& cur, vector<vector<int>>& result, int idx) {
        if(target == 0 && cur.size() == k) {
            result.push_back(cur);
            return;
        }
        if(target < 0)
            return;
        
        for(int i = idx; i < candidates.size(); i++) {
            if(i > idx && candidates[i] == candidates[i-1])
                continue;
            if(candidates[i] > 9)
                continue;
            cur.push_back(candidates[i]);
            solve(candidates, k, target-candidates[i], cur, result, i+1);
            cur.pop_back();
        }
    }
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<int> cur;
        vector<vector<int>> result;
        vector<int> candidates;
        
        for(int i = 1; i < n; i++) {
            candidates.push_back(i);
        }
        
        solve(candidates, k, n, cur, result, 0);
        return result;
    }
};
