/*
  Leet Code link : 2762. Continuous Subarrays
*/

/*
  Approach 1 
  T.C : O(n)
  S.C : O(1)
1*/


class Solution {
public:

    long long continuousSubarrays(vector<int>& nums) {
        int n = nums.size();
        
        int i = 0;
        int j = 0;
        map<int,int> mp;
        long long cnt = 0;
        while(j < n) {
            mp[nums[j]]++;
            
            while(abs(mp.rbegin()->first - mp.begin()->first) > 2) {
                mp[nums[i]]--;
                
                if(mp[nums[i]] == 0) {
                    mp.erase(nums[i]);
                }
                
                i++;
            } 
            
            cnt += j - i + 1;
            j++;
        }
        
        return cnt;

    }
};





/*

    Approach 2
    T.C : O(nlogn)
    S.C : 0(1)
*/



class Solution {
public:
     #define P pair<int,int>
    long long continuousSubarrays(vector<int>& nums) {
       
        int n = nums.size();
        
        
        priority_queue<P, vector<P>, greater<P>> minHeap;
        priority_queue<P, vector<P>> maxHeap;
        
        int i = 0;
        int j = 0;
        long long count = 0;
        
        
        while(j < n) {
            minHeap.push({nums[j], j});
            maxHeap.push({nums[j], j});
            
            
            while(maxHeap.top().first - minHeap.top().first > 2) {
                i++;
                
                while(!maxHeap.empty() && maxHeap.top().second < i) {
                    maxHeap.pop();
                }
                
                while(!minHeap.empty() && minHeap.top().second < i) {
                    minHeap.pop();
                }
            }
            
            count += j - i + 1;
            j++;
        }
        
        return count;
    }
};
