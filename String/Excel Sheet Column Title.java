/*
  168. Excel Sheet Column Title
*/


class Solution {
    public String convertToTitle(int columnNumber) {
        Map<Integer,Character> map = new HashMap<>();
        int i = 1;
        for (char ch = 'A'; ch <= 'Z'; ++ch) {
            map.put(i++, ch); 
        }

        StringBuilder result = new StringBuilder();
        
        while(columnNumber > 0) {
            columnNumber--;
            int rem = columnNumber % 26 + 1;
            result.append(map.get(rem));
            columnNumber = (int) columnNumber / 26;   
        }
       
        return result.reverse().toString();
        
    }
}
