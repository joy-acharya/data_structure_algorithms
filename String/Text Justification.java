/*
68. Text Justification [hard mark in leetocde]
*/

class Solution {
    int MAX_WIDTH;
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> result = new ArrayList();
        int n = words.length;
        MAX_WIDTH = maxWidth;
        int i = 0;
        
        while(i < n) {
            int lettersCount = words[i].length();
            int j = i + 1;
            int spaceSlots = 0;
            
            while(j < n && words[j].length() + lettersCount + spaceSlots + 1 <= MAX_WIDTH) {
                lettersCount += words[j].length();
                spaceSlots++;
                j++;
            }
            
            int remainingSlots = MAX_WIDTH - lettersCount;
            int eachWordSpace = spaceSlots == 0 ? 0 : remainingSlots / spaceSlots;
            int extraSpace = spaceSlots == 0 ? 0 : remainingSlots % spaceSlots;
            
            if(j == n) {
                eachWordSpace = 1;
                extraSpace = 0;
            }
            
            result.add(getFinalWord(i, j, eachWordSpace, extraSpace, words));
            i = j;
        }
        
        return result;
    }
    
    String getFinalWord(int i, int j, int eachSpace, int extraSpace, String[] words) {
        StringBuilder line = new StringBuilder();
        for(int k = i; k < j; k++) {
            line.append(words[k]);
            if(k == j -1)
                continue;
            for(int z = 1; z <= eachSpace; z++) {
                line.append(" ");
            }
            
            if(extraSpace > 0) {
                line.append(" ");
                extraSpace--;
            }
        }
        
        while(line.length() < MAX_WIDTH) {
            line.append(" ");
        }
        return line.toString();
        
    }
}
