/*
  1496. Path Crossing
  Leet Code Link: https://leetcode.com/problems/path-crossing/
  T.C : O(n)
*/


/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const n = path.length;
    
    const set = new Set();
    
    let x = 0, y = 0;
    
    set.add(x+'_'+y);
    
    for(let i = 0; i < n; i++) {
        if(path[i] == 'E')
            x++;
        else if(path[i] == 'W') {
            x--
        } else if(path[i] == 'N') {
            y++
        } else {
            y--;
        }
        
        const str = x + '_' + y;
        
        if(set.has(str)) {
            return true;
        }
        
        set.add(str);
        
    }
    
    return false;
};
