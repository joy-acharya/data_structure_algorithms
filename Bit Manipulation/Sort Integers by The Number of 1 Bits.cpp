/*
  1356. Sort Integers by The Number of 1 Bits
  Leet Code Link : https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
  Company Asked : Amazon
  T.C : O(logn * log2(num))
*/

class Solution {
public:
    int countOneBit(int num) {
        int count = 0;
        
        while (num != 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    }
   
    vector<int> sortByBits(vector<int>& arr) {
        auto lambda = [&](int &a, int &b) {
            // int count_a  = __builtin_popcount(a);  O(1)
            // int count_b  = __builtin_popcount(b);  O(1)

            int count_a  = countOneBit(a);
            int count_b  = countOneBit(b);
            
            if(count_a == count_b)
                return a < b;
            return count_a < count_b;
        };
        
        sort(begin(arr), end(arr), lambda);
        return arr;
    }
};
