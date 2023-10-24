/*
    515. Find Largest Value in Each Tree Row
    Leet Code Link : https://leetcode.com/problems/find-largest-value-in-each-tree-row/
    Comapnay Asked : Meta
    T.C : O(n)
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    let result = [];
    let que = [];
    que.push(root);
    
    if(root == null)
        return [];
    
    while(que.length > 0) {
        let n = que.length;
        let maxVal = Number.MIN_SAFE_INTEGER;
        
        while(n--) {
            let node = que.shift();
            
            if(node && node.left) {
                que.push(node.left);
            }
            
            if(node && node.right) {
                que.push(node.right);
            }
            
            if(node)
                maxVal = Math.max(maxVal, node.val);
        }
        
        result.push(maxVal);
    }
    
    return result;
};
