/*
   1647. Minimum Deletions to Make Character Frequencies Unique
   Leet code Link : https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
   Company Asked : Microsoft
   T.C : O(n)
*/


/*  C++ */

class Solution {
public:
    int minDeletions(string s) {
     
        int freq[26] = {};
        
        for(char &ch : s) {
            freq[ch-'a']++;
        }
        
        int result = 0;
        unordered_set<int> st;
        
        for(int i = 0; i < 26; i++) {
            while(freq[i] > 0 && st.find(freq[i]) != st.end()) {
                freq[i] -= 1;
                result++;
            }
            st.insert(freq[i]);
        }
        return result;
    }
};





/* Javascript */

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let map = {};
    
    for(let ch in s) {
        map[s[ch]] =(map[s[ch]] || 0) + 1;
    }
    
    let st = new Set();
    let result = 0;
    for(let freq in map) {
        while(map[freq] > 0 && st.has(map[freq])) {
            result += 1;
            map[freq] -= 1;
        }
        st.add(map[freq]);
    }
    
    return result;
};

  
