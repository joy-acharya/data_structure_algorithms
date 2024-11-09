/*
  letcode link : https://leetcode.com/problems/minimum-array-end/
  T.C : O(n)
  S.C : O(1)
*/


long long minEnd(int n, int x) {
    long long num = x;
    
    for(int i = 1; i < n; i++) {
        num = (num + 1) | x;
    }
    
    return num;
}
