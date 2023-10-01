/*
  557. Reverse Words in a String III
  Leet Code Link : https://leetcode.com/problems/reverse-words-in-a-string-iii/
  Company Asked : Zappos, MentorGraphics
  T.C : O(n)
*/

var reverseWords = function(s) {
    let ans = '';
    s = s.split(' ');
    for(let i = 0; i < s.length; i++) {
        ans += reverse(s[i]) + ' ';
    }

    return ans.slice(0,-1);
};


var reverse = (s) => {
    return s.split("").reverse().join('');
}
