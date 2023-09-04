/*
  141. Linked List Cycle
  Leet code link : https://leetcode.com/problems/linked-list-cycle/
  T.C : 0(n);
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head == null)
        return false;
    
    let fast = head;
    let last = head;
    
    while(fast != null && fast.next != null) {
        fast = fast.next.next;
        last = last.next;
        
        if(fast == last)
            return true;
    }
    
    return false;
};
