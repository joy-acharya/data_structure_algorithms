/*
  2366. Minimum Replacements to Sort the Array
  leet code link : https://leetcode.com/problems/minimum-replacements-to-sort-the-array/
  T.C : O(n) , S.C : O(1)
*/


class Solution {
    public long minimumReplacement(int[] nums) {
        int n = nums.length;
        long operations = 0;
        for(int i = n-2; i >= 0; i--) {
            if(nums[i] <= nums[i+1])
                continue;
            int parts = nums[i] / nums[i+1];
            if(nums[i] % nums[i+1] != 0) {
                parts++;
            }
            operations += parts - 1;
            
            nums[i] = nums[i] / parts;
        }
        
        return operations;
    }
}
