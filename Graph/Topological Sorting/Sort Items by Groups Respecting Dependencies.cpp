/*
    1203. Sort Items by Groups Respecting Dependencies
    LeetCode Link : https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/
*/

/*
  Time Complexity - 
  We fill the itemGraph and groupGraphs by traversing on each item and beforeItems causing O(n^2) in worst case. 
  After that, Since we call Topological Sort for : 
  1) itemGraph - O(n + edges) 
  2) Group Graph - O(m + edges) 
  
  Then, we run for loop ok itemOrder - O(n) 
  Then we run for loop on groupOrder - O(m) 
  Then at the end we make result - O(n)
  After summing up all, the biggest term is O(n^2) 
  Hence worst case TC = O(n^2)

*/


class Solution {
public:
    
    vector<int> topoSort(unordered_map<int, vector<int>>& adj, vector<int>& indegree) {
        queue<int> que;
        
        for(int i = 0; i < adj.size(); i++) {
            if(indegree[i] == 0) {
                que.push(i);
            }
        }
        
        vector<int> result;
        
        while(!que.empty()) {
            int u = que.front();
            que.pop();
            result.push_back(u);
            
            for(int &v : adj[u]) {
                indegree[v]--;
                if(indegree[v] == 0) {
                    que.push(v);
                }
            }
        }
        
        return result.size() == adj.size() ? result : vector<int>();
    }
    vector<int> sortItems(int n, int m, vector<int>& group, vector<vector<int>>& beforeItems) {
        // initialise a group who has no group // assign group to loners;
        for(int i = 0; i < n; i++) {
            if(group[i] == -1) {
                group[i] = m++;
            }
        }
        
        unordered_map<int, vector<int>> itemGraph;
        vector<int> itemIndegree(n,0);
        
        for(int i = 0; i < n; i++) {
            itemGraph[i] = vector<int>();
        }
        
        
        unordered_map<int, vector<int>> groupGraph;
        vector<int> groupIndegree(m,0);
        
        for(int i = 0; i < m; i++) {
            groupGraph[i] = vector<int>();
        }
        
        for(int i = 0; i < n; i++) {
            for(int prev : beforeItems[i]) {
                itemGraph[prev].push_back(i);
                itemIndegree[i]++;
                
                if(group[i] != group[prev]) {
                    int prevItemGroup = group[prev];
                    int currItemGroup = group[i];
                    
                    groupGraph[prevItemGroup].push_back(currItemGroup);
                    groupIndegree[currItemGroup]++;
                    
                }
            }
        }
        
        vector<int> itemOrder = topoSort(itemGraph, itemIndegree);
        vector<int> groupOrder = topoSort(groupGraph,groupIndegree);
        
        unordered_map<int, vector<int>> groupToItemsInOrder;
        
        for(int &item : itemOrder) {
            int itemGroup = group[item];
            groupToItemsInOrder[itemGroup].push_back(item);
        }
        
        vector<int> result;
        
        for(int &group : groupOrder) {
            result.insert(result.end(), groupToItemsInOrder[group].begin(), groupToItemsInOrder[group].end());
        }
        
        
        return result;
    }
};
