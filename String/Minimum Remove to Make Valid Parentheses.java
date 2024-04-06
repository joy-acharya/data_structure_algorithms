/*
  1249. Minimum Remove to Make Valid Parentheses
  Leet Code Link : https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
  Asked By : Google, Facebook, Amazone, tiktok, Adobe, Bloomberg
*/

/*
  Technique 1 
  T.C : O(n)
  S.C : O(n)
*/

class Solution {
    public String minRemoveToMakeValid(String s) {
        int n = s.length();
        
        Set<Integer> toRemove = new HashSet<>();
        Stack<Integer> st = new Stack<>();
        
        for(int i = 0; i < n; i++) {
            if(s.charAt(i) == '(') {
                st.push(i);
            } else if(s.charAt(i) == ')') {
                if(st.empty()) {
                    toRemove.add(i);
                } else {
                    st.pop();
                }
            }
        }
          
        while(!st.empty()) {
            toRemove.add(st.pop());
        }
        
      StringBuilder result = new StringBuilder();
      
        for(int i = 0; i < n; i++) {
            if(!toRemove.contains(i)) {
                result.append(s.charAt(i));
            }
        }
        return result.toString();
    }
}


/* 
  Technique 1 / javascript 
  T.C : O(n)
  S.C : O(n)
*/

var minRemoveToMakeValid = function(s) {
    let n = s.length;
    let st = [];
    let toRemove = new Set();
    
    for(let i = 0; i < n ; i++) {
        if(s[i] == '(') {
            st.push(i);
        } else if(s[i] == ')') {
            if(st.length == 0) {
                toRemove.add(i);
            } else {
                st.pop();
            }
        }
    }
    
    while(st.length !== 0) {
        toRemove.add(st.pop())
    }
    
    let result = '';
    
    for(let i = 0; i < n ; i++) {
        if(!toRemove.has(i)) {
            result += s[i];
        }
    }
    
    return result;
};


/* 
  Technique 2 
  T.C : O(n)
  S.C : O(n)
*/

class Solution {
    public String minRemoveToMakeValid(String s) {
        StringBuilder result = new StringBuilder();
        int n = s.length();
        
        int lastOpen = 0;
        for (int i = 0; i < n; i++) {
            char c = s.charAt(i);
            if ((c >= 'a' && c <= 'z'))
                result.append(c);
            else if (c == '(') {
                result.append(c);
                lastOpen++;
            } else if (lastOpen > 0) {
                lastOpen--;
                result.append(c);
            }
        }
        
        if (result.length() == 0)
            return "";
        
        s = result.toString();
        result = new StringBuilder();
        int lastClose = 0;
        n = s.length();
        
        for (int i = n - 1; i >= 0; i--) {
            char c = s.charAt(i);
            if ((c >= 'a' && c <= 'z'))
                result.append(c);
            else if (c == ')') {
                result.append(c);
                lastClose++;
            } else if (lastClose > 0) {
                lastClose--;
                result.append(c);
            }
        }
        return result.reverse().toString();
    }
}
