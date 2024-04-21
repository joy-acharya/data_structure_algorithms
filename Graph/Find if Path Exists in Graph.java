/*
  1971. Find if Path Exists in Graph
  Leet Code Link : https://leetcode.com/problems/find-if-path-exists-in-graph/
  T.C : O(m+1)
  S.C : O(n)
  Asked By : Microsoft, Amazone, Adove, Samsung
*/

// BFS

class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        Map<Integer, List<Integer>> map = new HashMap<>();
        
        for(int[] edge : edges) {
            int v = edge[0];
            int e = edge[1];
            
            if(!map.containsKey(v)) map.put(v, new ArrayList<>());
            if(!map.containsKey(e)) map.put(e, new ArrayList<>());
            
            map.get(v).add(e);
            map.get(e).add(v);
        }
        
        Deque<Integer> stack = new ArrayDeque<>();
        
        Set<Integer> visited = new HashSet<>();
        
        stack.push(source);
        
        while(!stack.isEmpty()) {
            int v = stack.pop();
            
            if(v == destination) return true;
            
            if(!visited.contains(v)) {
                visited.add(v);
                
                for(int e : map.get(v)) {
                    if(!visited.contains(e)) {
                        stack.push(e);
                    }
                }
            }
            
        }
        
        return false;
    }
}
