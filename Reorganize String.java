/*
  leet code
  767. Reorganize String
*/

class Solution {
    public String reorganizeString(String s) {
        Map<Character,Integer> map = new HashMap<>();
        int n = s.length();
        for(char c : s.toCharArray()) {
            int count = map.getOrDefault(c, 0) + 1;
            if(count > (n + 1) / 2) {
                return "";
            }
            
            map.put(c, count);
        }
        
       PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->b[0]-a[0]);
        
       for(char c : map.keySet()) {
           pq.add(new int[]{map.get(c),c});
       }
        
        StringBuilder result = new StringBuilder();
        while(pq.size() >= 2) {
            int[] first = pq.poll();
            int[] second = pq.poll();
            result.append((char) first[1]);
            result.append((char) second[1]);
            
            first[0]--;
            second[0]--;
            
            if(first[0] > 0) {
                pq.add(first);
            }
            
            if(second[0] > 0) {
                pq.add(second);
            }
        }
        
        if(!pq.isEmpty()) {
            result.append((char) pq.poll()[1]);
        }
        
        return result.toString();
    }
}
