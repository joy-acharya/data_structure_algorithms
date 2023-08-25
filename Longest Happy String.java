
/*
    Leet code / Heap
    1405. Longest Happy String

*/


class Solution {
    public String longestDiverseString(int a, int b, int c) {
        if(a == 0 && b == 0 && c == 0)
            return "";
        PriorityQueue<int[]> pq = new PriorityQueue<>((m,n)->n[0]-m[0]);
        pq.add(new int[]{a,'a'});
        pq.add(new int[]{b,'b'});
        pq.add(new int[]{c,'c'});
        StringBuilder result = new StringBuilder();

        
        while(true) {
             int n = result.length();
             int[] f = pq.poll();
             char h = (char) f[1];
            
            
            if (n >= 2 && result.charAt(n-1) == h && result.charAt(n - 2) == h) { 
                int[] s = pq.poll();
                pq.add(f);
                f = s;
            }
            
            if(f[0] == 0) {
                break;
            }
            result.append((char) f[1]);
            f[0]--;
            pq.add(f);
            
        }

        return result.toString();
    }
}
