/*
  2785. Sort Vowels in a String
  Leet Code Link : https://leetcode.com/problems/sort-vowels-in-a-string/
  Company Asked : Microsoft
*/

/* Approach 1 : T. C : O(nlogn) */

/**
 * @param {string} s
 * @return {string}
 */

var isVowel = function(ch) {
    ch = ch.toLowerCase();
    return (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u');
}

var sortVowels = function(s) {
    let tmp = '';
    for(let i = 0; i < s.length; i++) {
        if(isVowel(s[i])) {
            tmp += s[i];
        }
    }
    
    tmp = tmp.split("").sort();
    
    let index = 0;
    s = s.split("");
    for(let i = 0; i < s.length; i++) {
        if(isVowel(s[i])) {
            s[i] = tmp[index];
            index++;
        }
    }
    
    return s.join("");
    
};




/*  Approach 2 : T.C : O(n)  */


/**
 * @param {string} s
 * @return {string}
 */

var isVowel = function(ch) {
    ch = ch.toLowerCase();
    return (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u');
}

var sortVowels = function(s) {
    let map = {};
    
    for(let i = 0; i < s.length; i++) {
        if(isVowel(s[i]))
            map[s[i]] = (map[s[i]] || 0) + 1;
    }
    
    s = s.split('');
    
    let j = 0;
    const defaultVowel = ['A','E','I','O','U','a','e','i','o','u'];
    for(let i = 0; i < s.length; i++) {
        if(isVowel(s[i])) {
            while(!map[defaultVowel[j]]) {
                j++;
            }
            
            s[i] = defaultVowel[j];
            map[defaultVowel[j]]--;
        }
    }
    
    return s.join('');
};
