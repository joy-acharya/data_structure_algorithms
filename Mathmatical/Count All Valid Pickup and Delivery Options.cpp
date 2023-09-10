/*
  1359. Count All Valid Pickup and Delivery Options
  Leet Code Link : https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/
  Company Asked : Meta
  T.C : O(n)
*/

class Solution {
public:
    int countOrders(int n) {
        if(n == 1)
            return 1;
        int M = 1e9+7;
        long long result = 1;
        
        for(int i = 2; i <= n; i++) {
            int spaces = (i - 1) * 2 + 1;
            int posibilities = spaces * (spaces + 1) / 2;
            result *=  posibilities;
            result %= M;
        }
        
        return result;
    }
};
