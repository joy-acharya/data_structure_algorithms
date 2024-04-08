/*
  1700. Number of Students Unable to Eat Lunch
  Leet Code Link : https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
  T.C : O(n)
  S.C : O(n)  
*/

class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        int n = students.length;
        int[] arr = new int[2];
        
        for(int student : students) {
            arr[student]++;
        }
      
        for(int i = 0; i < n; i++) {
            int sand = sandwiches[i];
            if(arr[sand] == 0) {
                return n - i;
            }
            arr[sand]--;
        }
        
        return 0;
    }
}
