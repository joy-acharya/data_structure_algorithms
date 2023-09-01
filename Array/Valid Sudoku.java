/*
  36. Valid Sudoku
  Leet code link : https://leetcode.com/problems/valid-sudoku/
*/


class Solution {
    public boolean isValidSudoku(char[][] board) {
               Set<String> set = new HashSet<>();
        for(int i=0; i<9; i++){
            for(int j=0; j<9; j++){
                char n = board[i][j];
                if(n != '.'){

                if(!set.add(n+"row"+i) || !set.add(n+"col"+j) || !set.add(n+"block"+(i/3)+","+(j/3))) {
                    return false;
                }
                    
                }
            }
        }
        return true;
    }
}
