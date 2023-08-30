/*
  328. Odd Even Linked List
  Leet code link : https://leetcode.com/problems/odd-even-linked-list/
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
var oddEvenList = function(head) {
   if(!head || (head.next && !head.next.next)) return head
    let odd=head;
    let even_head = new ListNode(-1);
    let even = even_head;

    while(odd && odd.next){
        even.next = odd.next;
        odd.next = odd.next.next; 
        even = even.next;
        even.next = null;
        odd = !odd.next ? odd : odd.next;
    }
    odd.next = even_head.next;
    return head;
}
