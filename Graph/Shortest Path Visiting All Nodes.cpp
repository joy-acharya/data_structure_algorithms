/*
  847. Shortest Path Visiting All Nodes
  Leet Code Link : https://leetcode.com/problems/shortest-path-visiting-all-nodes/
  Company Asked : GOOGLE
*/

class Solution {
public:
    typedef pair<int,int> P;
    int shortestPathLength(vector<vector<int>>& graph) {
        int n = graph.size();
        if(n == 1|| n == 0)
            return 0;
        queue<P> que;
        set<P> visited;
        
        for(int i = 0; i < n; i++) {
            int maskValue = (1 << i);
            que.push({i,maskValue});
            visited.insert({i,maskValue});
        }
        
        int allVisitedState = (1 << n) -1; // pow(2,n)-1;
        
        int path = 0;
        
        while(!que.empty()) {
            int size = que.size();
            path++;
            while(size--) {
                P curr = que.front();
                que.pop();
                
                int curNode = curr.first;
                int cusMask = curr.second;
                
                for(int &adj : graph[curNode]) {
                    int nextMask = cusMask | (1 << adj);
                    if(nextMask == allVisitedState)
                        return path;
                    if(visited.find({adj,nextMask}) == visited.end()) {
                        visited.insert({adj,nextMask});
                        que.push({adj,nextMask});
                    }
                }
            }
        }
        return -1;
    }
};
