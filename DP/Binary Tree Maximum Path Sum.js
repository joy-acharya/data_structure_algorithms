/*
  124. Binary Tree Maximum Path Sum
  leet code link : https://leetcode.com/problems/binary-tree-maximum-path-sum/
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
 * @return {number}
 */
var maxPathSum = function(root) {
    let ans = -100000;
    var find = (root) => {
        if(root == null)
            return 0;
        var left = find(root.left);
        var right = find(root.right);
        left = left > 0 ? left : 0;
        right = right > 0 ? right : 0;

        ans = Math.max(ans, root.val + left + right);
        return root.val + Math.max(left,right);
    }

    find(root);
    return ans;
};
