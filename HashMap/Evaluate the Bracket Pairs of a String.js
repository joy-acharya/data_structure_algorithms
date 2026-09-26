/*
  1807. Evaluate the Bracket Pairs of a String
  LeetCode Link: https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string
  T.C: O(n+m)
  S.C: O(n+m)
*/

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    

    let inOP = false;
    let result = '';

    let map = new Map();

    for(let i = 0; i < knowledge.length; i++) {
        map.set(knowledge[i][0], knowledge[i][1])
    }

    let tmpRes = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(') {
            inOP = true;
            continue;
        } else if(s[i] == ')') {
            inOP = false;
            if(map.has(tmpRes)) {
                result += map.get(tmpRes);
            } else {
                result += '?';
            }
            tmpRes = '';
            continue;
        }

        if(inOP == true) {
            tmpRes += s[i];
        } else {
            result += s[i];
        }
    }

    return result;

};
