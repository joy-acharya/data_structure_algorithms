/*
  3838. Weighted Word Mapping
  Lettcode Link: https://leetcode.com/problems/weighted-word-mapping/description/?envType=daily-question&envId=2026-06-13
  T.C  : O(m)
  S.C : O(1)
*/



/**
  Approach 1
*/


/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let map = new Map;
    let mapL = new Map;

    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let letterRev = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a'];

    

    for(let i = 0; i < 26; i++) {
        map.set(i, letterRev[i]);
        mapL.set(letters[i], i);
    }

    let ans = '';
    for(let i = 0; i < words.length; i++) {
        let total = 0;
        for(let j = 0; j < words[i].length; j++) {
            total +=  weights[mapL.get(words[i][j])];
        }

        total %= 26;
        ans += map.get(total);
    }

    return ans;

};

/**
 * Approach 2 
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let ans = "";

    for (const word of words) {
        let total = 0;

        for (const ch of word) {
            const index = ch.charCodeAt(0) - 97; // a = 0, b = 1, ...
            total += weights[index];
        }

        total %= 26;

        // 0 -> z, 1 -> y, 2 -> x ... 25 -> a
        ans += String.fromCharCode(122 - total);
    }

    return ans;
};
