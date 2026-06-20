/*
  1840. Maximum Building Height
  Leetcode link: https://leetcode.com/problems/maximum-building-height
  T.C: O(MlogM)
  S.C: O(M)
*/

/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {
    if(restrictions.length === 0)
        return n-1;

    restrictions.push([1, 0]);
    if (!restrictions.some(r => r[0] === n)) {
        restrictions.push([n, n - 1]);
    }
    restrictions.sort((a,b)=>a[0]-b[0]);

    const m = restrictions.length;
    

    for(let i = 1; i < m; i++) {
        const dist = restrictions[i][0] - restrictions[i-1][0];
        restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i-1][1] + dist);
    }

    for(let i = m - 2; i >= 0; i--) {
        const dist = restrictions[i+1][0] - restrictions[i][0];
        restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i+1][1] + dist);
    }

    console.log(restrictions);

    let maxHeight = 0;

    for(let i = 0; i < m - 1; i++) {

        const [id1, h1] = restrictions[i];
        const [id2, h2] = restrictions[i + 1];

        const dist = id2 - id1;
        const peak = Math.floor((h1 + h2 + dist) / 2);
        maxHeight = Math.max(maxHeight, peak);
    }

    return maxHeight;
};
