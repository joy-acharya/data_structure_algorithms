/*
  Leet code link : https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
*/

class Solution {
public:
    bool solve(vector<int>& nums, int target, int left, int right) {
        while(left <= right) {
            if(nums[left] == target || nums[right] == target)
                return true;
            else if(nums[left] < target) {
               left++;
            } else if(nums[right] > target) {
                right--;
            } else {
                return false;
            }
        }
        return false;
    }
    
    bool search(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size()-1;
        return solve(nums, target, left, right);
    }
};
