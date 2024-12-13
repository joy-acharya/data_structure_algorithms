/*
  leet code link : https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/
*/

/* 
  Approach 1
  T.C : O(nlogn)
  S.C : O(n)
*/

class Solution {
public:
    long long findScore(vector<int>& nums) {
        int n = nums.size();
        
        vector<pair<int,int>> vec(n);
        
        
        for(int i = 0; i < n; i++) {
            vec[i] = {nums[i], i};
        }
        
        sort(begin(vec),end(vec));
        long long score = 0;
        vector<bool> visited(n,false);
        
        for(int i = 0; i < n; i++) {
            int num = vec[i].first;
            int idx = vec[i].second;
            
            if(visited[idx] == true) continue;
            
            visited[idx] = true;
            
            score += num;
            
            if(idx - 1 >= 0) {
                visited[idx-1] = true;
            }
            
            
            if(idx + 1 < n) {
                visited[idx + 1] = true;
            }
            
        }
        
        return score;
                

    }
};



/*
    Approach 2
    T.C : O(nlogn)
    S.C : O(n)
*/


class Solution {
public:
    long long findScore(vector<int>& nums) {
        #define P pair<int,int>
        int n = nums.size();
        vector<bool> visited(n,false);
        
        priority_queue<P, vector<P>, greater<P>> pq;
        
        
        for(int i = 0; i < n; i++) {
            pq.push({nums[i], i});
        }
        
        long long score = 0;
        
        while(!pq.empty()) {
            auto x = pq.top();
            pq.pop();
            
            int num = x.first;
            int idx = x.second;
            
            if(visited[idx]) continue;
            
            visited[idx] = true;
            score += num;
            
            if(idx - 1 >= 0 && visited[idx-1] == false) {
                visited[idx-1] = true;
            }
            
            if(idx + 1 < n && visited[idx+1] == false) {
                visited[idx+1] = true;
            }
        }
        
        return score;
    }
};
