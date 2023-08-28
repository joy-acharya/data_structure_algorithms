/*
  2095. Delete the Middle Node of a Linked List
  leet code link : https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(head.next == null)
        return null;
        let deer = head;
        let turtle = head;
        let tmp = null;
        
    
    
        while(deer != null && deer.next != null) {
            deer = deer.next.next;
            tmp = turtle;
            turtle = turtle.next;
        }
    tmp.next = turtle.next;
    return head;    
    
};
