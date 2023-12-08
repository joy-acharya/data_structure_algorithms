/*
  606. Construct String from Binary Tree
  Leet Code Link : https://leetcode.com/problems/construct-string-from-binary-tree/
  Company Asked : Amazon
  T.C : O(n)
  S.C : O(1)
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
 * @return {string}
 */
var tree2str = function(root) {
    if(root == null) {
        return;        
    }
    
    let result = root.val;
    
    let left = tree2str(root.left);
    
    let right = tree2str(root.right);
    
    if(left == null && right == null)
        return result.toString();
    
    if(right == null)
        return result + '(' + left + ')';
    
    if(left == null)
        return result + '()(' + right + ')';
    
    return result + '(' + left + ')' + '(' + right + ')';
    
};

