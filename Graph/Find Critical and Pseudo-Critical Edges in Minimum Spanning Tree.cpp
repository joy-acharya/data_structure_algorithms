/*
  leetcode link : https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/
  //Using Union Find + Kruskal's. T.C : ElogE + E*@ + E*E*@
*/


class Solution {
public:
    int N;
    class UnionFind {
        public:
            vector<int> parent;
            vector<int> rank;
            UnionFind(int n) {
                parent.resize(n);
                rank.resize(n,0);
                
                for(int i = 0; i < n; i++) {
                    parent[i] = i;
                }
            }
        
            int find(int x) {
                if(x == parent[x])
                    return x;
                return parent[x] = find(parent[x]);
            }
        
            bool Union(int x, int y) {
                int x_parent = find(x);
                int y_parent = find(y);
                
                if(x_parent == y_parent) {
                    return false;
                }
                
                if(rank[x_parent] > rank[y_parent]) {
                    parent[y_parent] = x_parent;
                } else if(rank[x_parent] < rank[y_parent]) {
                    parent[x_parent] = y_parent;
                } else {
                    parent[x_parent] = y_parent;
                    rank[y_parent]++;
                }
                return true;
            }
    };
    
    int kruskal(vector<vector<int>>& vec, int skip_edge, int add_edge) {
        int sum = 0;
        UnionFind uf(N);
        
        
        if(add_edge != -1) {
            uf.Union(vec[add_edge][0],vec[add_edge][1]);
            sum += vec[add_edge][2];
        }
        
        for(int i = 0; i < vec.size(); i++) {
            if(skip_edge == i) {
                continue;
            }
            
            int u = vec[i][0];
            int v = vec[i][1];
            int wt = vec[i][2];
            
            int parent_u = uf.find(u);
            int parent_v = uf.find(v);
            
            if(parent_u != parent_v) {
                uf.Union(u,v);
                sum += wt;
            }
        }
        
        for(int i = 0; i < N; i++) {
            if(uf.find(i) != uf.find(0))
                return INT_MAX;
        }
        
        return sum;
    }
    
    vector<vector<int>> findCriticalAndPseudoCriticalEdges(int n, vector<vector<int>>& edges) {
        N = n;
        for(int i = 0; i < edges.size(); i++) {
            edges[i].push_back(i);
        }
        
        auto lambda = [&](vector<int>& vec1, vector<int>& vec2) {
            return vec1[2] < vec2[2];
        };
        
        sort(begin(edges),end(edges),lambda);
        
        int MST_WEIGHT = kruskal(edges, -1, -1);
        
        vector<int> critical;
        vector<int> pseudo_critical;
        
        for(int i = 0; i < edges.size(); i++) {
            if(kruskal(edges, i, -1) > MST_WEIGHT) {
                critical.push_back(edges[i][3]);
            } else if(kruskal(edges, -1, i) == MST_WEIGHT) {
                pseudo_critical.push_back(edges[i][3]);
            }
        }
        
        return {critical, pseudo_critical};
        
    }
};
