/*
  2126. Destroying Asteroids
  Leetcode link: https://leetcode.com/problems/destroying-asteroids/description/?envType=daily-question&envId=2026-05-31
  T.C : O(nlogn)
  S.C : O(1)
*/

/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a,b)=>a-b)

    for(let i = 0; i < asteroids.length; i++) {
        if(mass >= asteroids[i]) {
            mass += asteroids[i]
        } else {
            return false;
        }
    }

    return true;
};
