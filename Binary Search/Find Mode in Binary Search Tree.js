/*
  501. Find Mode in Binary Search Tree
  Leet Code Link : https://leetcode.com/problems/find-mode-in-binary-search-tree/
  Company Asked : Google
*/

/* Approch 1 
  T.C : O(n)
  S.C : O(n)
*/


var findMode = function(root) {
    let map = {};
    dfs(root,map);
    let maxi = 0;
    let result = [];
    for(let m in map) {
        if(map[m] > maxi) {
            maxi = map[m];
            result = [];
            result.push(m);
        } else if(map[m] == maxi) {
            result.push(m)
        }
    }
    return result;
};

var dfs = function(root,map) {
    if(!root)
        return;
    
    dfs(root.left,map);
    map[root.val] = (map[root.val] || 0) + 1;
    dfs(root.right,map);
}


/* Approch 1 
  T.C : O(n)
  S.C : O(1)
*/

var findMode = function(root) {
    let curNum = 0;
    let curFreq = 0;
    let maxFreq = 0;
    let result = [];

    const dfs = function(root) {
        if (!root) return;

        dfs(root.left);

        if (curNum === root.val) {
            curFreq++;
        } else {
            curNum = root.val;
            curFreq = 1;
        }

        if (curFreq > maxFreq) {
            result = [];
            maxFreq = curFreq;
        }

        if (curFreq === maxFreq) {
            result.push(root.val);
        }

        dfs(root.right);
    };

    dfs(root);
    return result;
};


