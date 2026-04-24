/*
  2833. Furthest Point From Origin
  Leetcode link: https://leetcode.com/problems/furthest-point-from-origin/description/?envType=daily-question&envId=2026-04-24
  T.C : O(n)
  S.C : O(1)
*/
var furthestDistanceFromOrigin = function(moves) {
    let left = 0;
    let right = 0;
    let dash = 0;
    const n = moves.length;

    for(let i = 0; i < n; i++) {
        if(moves[i] == 'L') {
            left++;
        } else if(moves[i] == 'R') {
            right++;
        } else {
            dash++;
        }
    }  return Math.abs(left - right) + dash;

};
