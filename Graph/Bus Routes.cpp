/*
  815. Bus Routes
  Leet Code Link : https://leetcode.com/problems/bus-routes/
  Company Asked : Uber
  T.C : O(m*k^2)
*/


class Solution {
public:
    int numBusesToDestination(vector<vector<int>>& routes, int source, int target) {
        unordered_map<int, vector<int>>adj;
        
        if(source == target)
            return 0;
        
        int busCount = 1;
        
        for(int route = 0; route < routes.size(); route++) {
            for(auto &stop : routes[route]) {
                adj[stop].push_back(route);
            }
        }
        
        queue<int> que;
        vector<bool> visited(501,false);
        
        for(auto &route : adj[source]) {
            visited[route] = true;
            que.push(route);
        }
        
        while(!que.empty()) {
            int size = que.size();
            
            while(size--) {
                int route = que.front();
                que.pop();
                
                for(auto &stop : routes[route]) {
                    if(stop == target) {
                        return busCount;
                    }
                    
                    for(auto &nextRoute : adj[stop]) {
                        if(visited[nextRoute] == false) {
                            visited[nextRoute] = true;
                            que.push(nextRoute);   
                        }
                    }
                }
            }
            busCount++;
        }
        
        return -1;
    }
};
