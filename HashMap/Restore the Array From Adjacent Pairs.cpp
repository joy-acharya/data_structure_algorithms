/*
    1743. Restore the Array From Adjacent Pairs
    Leet Code link : https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/
    T.C : O(n)
    S.C : O(n)
*/

class Solution {
public:
    vector<int> result;
    
    void dfs(int u, int prev, unordered_map<int, vector<int>> &adj) {
        result.push_back(u);
        for(int &v : adj[u]) {
            if(v != prev) {
                dfs(v,u,adj);
            }
        }
    }
    
    vector<int> restoreArray(vector<vector<int>>& adjacentPairs) {
     
        unordered_map<int, vector<int>>adj;
        
        for(vector<int> &vec : adjacentPairs) {
            int u = vec[0];
            int v = vec[1];
            
            adj[u].push_back(v);
            adj[v].push_back(u);
        }
        
        int startPoint = -1;
        
        for(auto &lt : adj) {
            if(lt.second.size() == 1) {
                startPoint = lt.first;
                break;
            }
        }
        
        dfs(startPoint, INT_MIN, adj);
        return result;
    }
    
    
};
