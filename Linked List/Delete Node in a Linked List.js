/*
    237. Delete Node in a Linked List
    Leet code link : https://leetcode.com/problems/delete-node-in-a-linked-list/
*/



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let tmp = node.next;
    node.val = tmp.val;
    node.next = tmp.next;
};
