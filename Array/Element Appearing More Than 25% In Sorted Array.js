/*
  1287. Element Appearing More Than 25% In Sorted Array
  Leet Code Link : https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
*/



/*   Approach 1 */

// T.C : O(n)
// S.C : O(n)

var findSpecialInteger = function(arr) {
  
    let map = {};
    
    const n = arr.length;
    
    for(let i = 0; i < n; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }
    
    
    const percent = Math.min(n / 4);
    
    for(let i in map) {
        if(map[i] > percent) {
            return i;
        }
    }
    
};



/*   Approach 2 */

// T.C : O(n)
//S.C : O(1)




var findSpecialInteger = function(arr) {
    
    const n = arr.length;
    
    const freq = Math.floor(n / 4);
    
    for(let i = 0; i < n - freq; i++) {
        if(arr[i] == arr[i+freq]) {
            return arr[i];
        }
    }
    
};

