/*
  338. Counting Bits
  leet code link : https://leetcode.com/problems/counting-bits/

  Time Complexity : O(n)
*/

class Solution {
    public int[] countBits(int n) {
        int arr[] = new int[n+1];
        
        if(n == 0)
            return arr;
        arr[0] = 0;
        
        for(int i = 1; i <= n; i++) {
            if(i % 2 != 0) {
                arr[i] = arr[i/2] + 1;
            } else {
                arr[i] = arr[i/2];
            }
        }
        return arr;
    }
}
