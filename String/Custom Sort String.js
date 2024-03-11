/*
  791. Custom Sort String
  Leet Code Link : https://leetcode.com/problems/custom-sort-string/
  Company Asked : Meta
*/


/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let map = {};
    for(let ch of s) {
        map[ch] = (map[ch] || 0) + 1;
    }
    
    let result = '';
    
    for(let ch of order) {
        while(map[ch] > 0) {
            result += ch;
            map[ch]--;
        }
    }
    
    
    for(let item in map) {
        while(map[item] > 0) {
            result += item;
            map[item]--;
        }
        
    }
    
    return result;

};








/** Approach 2 */

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
      const index = Array(26).fill(-1);
      
      for (let i = 0; i < order.length; i++) {
          index[order.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
      }
      
      const customSort = (ch1, ch2) => {
          return index[ch1.charCodeAt(0) - 'a'.charCodeAt(0)] - index[ch2.charCodeAt(0) - 'a'.charCodeAt(0)];
      };
      
      return s.split('').sort(customSort).join('');
};


