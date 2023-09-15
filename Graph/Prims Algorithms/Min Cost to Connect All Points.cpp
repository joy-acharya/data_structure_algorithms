/*
  1584. Min Cost to Connect All Points
  Leet Code Link : https://leetcode.com/problems/min-cost-to-connect-all-points/
  Company Asked : Meta
*/

class Solution {
public:
    typedef pair<int, int> P;
    
    int primsAlgo(vector<vector<P>> &adj, int v) {
        priority_queue<P, vector<P>, greater<P>> pq;
        pq.push({0,0});
        vector<bool> inMst(v,false);
        
        int sum = 0;
        
        while(!pq.empty()) {
            auto p = pq.top();
            pq.pop();
            
            int wt = p.first;
            int node = p.second;
            
            if(inMst[node] == true)
                continue;
            inMst[node] = true;
            sum += wt;
            
            for(auto &tmp : adj[node]) {
                int neg = tmp.first;
                int nwt = tmp.second;
                
                if(inMst[neg] == false) {
                    pq.push({nwt,neg});
                }
            }
        }
        
        return sum;
    }
    
    int minCostConnectPoints(vector<vector<int>>& points) {
        int v = points.size();
        vector<vector<P>> adj(v);
        for(int i = 0; i < v; i++) {
            for(int j = i + 1; j < v; j++) {
                int x1 = points[i][0];
                int y1 = points[i][1];
                
                int x2 = points[j][0];
                int y2 = points[j][1];
                
                int distance = abs(x1-x2) + abs(y1-y2);
                adj[i].push_back({j,distance});
                adj[j].push_back({i,distance});
            }
        }
        
        return primsAlgo(adj, v);
    }
};
