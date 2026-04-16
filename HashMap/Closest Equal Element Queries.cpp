/*
  3488. Closest Equal Element Queries
  Leet code link : https://leetcode.com/problems/closest-equal-element-queries/description/?envType=daily-question&envId=2026-04-16
  T.C : O(Q * log(n))
  S.C : O(n)
*/


class Solution {
public:
    vector<int> solveQueries(vector<int>& nums, vector<int>& queries) {
        int n = nums.size();

        unordered_map<int, vector<int>> mp;

        for(int i = 0; i < n; i++) {
            mp[nums[i]].push_back(i);
        }

        vector<int> result;

        for(int qi:queries) {
            int elem = nums[qi];
            vector<int> &vec = mp[elem];

            int siz = vec.size();

            if(siz == 1) {
                result.push_back(-1);
                continue;
            }

            int pos = lower_bound(begin(vec), end(vec), qi) - begin(vec);
            int res = INT_MAX;

            int right = vec[(pos+1) % siz];
            int d = abs(qi - right);
            int cd = n - d;

            res = min({res, d , cd});


            int left = vec[(pos - 1 + siz) % siz];
            d = abs(qi - left);
            cd = n - d;

            res = min({res, d , cd});
            result.push_back(res);

        }

        return result;
    }
};
