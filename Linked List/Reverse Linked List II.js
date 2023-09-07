/*
  92. Reverse Linked List II
  Leet Code Link : https://leetcode.com/problems/reverse-linked-list-ii/
  T.C: o(n)
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(head == null || head.next == null)
        return head;
    
    let dummy = new ListNode();
    dummy.next = head;
    
    let prev = dummy;
    
    for(let i = 1; i < left; i++) {
        prev = prev.next;
    }
    
    let curr = prev.next;
    
    for(let i = 0; i < right - left; i++) {
        let tmp = prev.next;
        prev.next = curr.next;
        curr.next = curr.next.next;
        prev.next.next = tmp
    }
    
    return dummy.next;
};
