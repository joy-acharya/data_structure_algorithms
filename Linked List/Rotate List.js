/*
  Leetcode Link: https://leetcode.com/problems/rotate-list/description
  T.C : O(n)
  S.C : O(1)
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head == null || head.next == null || k == 0) return head;
    let tmpHead = head;

    let len = 1;
    while(tmpHead.next != null) {
        tmpHead = tmpHead.next;
        len++;
    }

    k = k % len;

    if(k == 0) return head;

    
    tmpHead.next = head;

    let rem = len - k;

    let newTail = head;

    while(rem > 1) {
        newTail = newTail.next;
        rem--;
    }

    let newHead = newTail.next;
    newTail.next = null;

    return newHead;

};
