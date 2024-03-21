/*
  206. Reverse Linked List
  Leet Code Link : https://leetcode.com/problems/reverse-linked-list/
  Asked By : Instragram, facebook, twitter, whatsapp
  T.C : O(m+n)
  S.C: O(1)
*/


/* Technique 1 */

var reverseList = function(head) {
    if(head == null || head.next == null) {
        return head;
    }
    
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return last;
};


/* Technique  2  */


var reverseList = function(head) {
    let node = head;
    let previous = null;
    let tmp = null;

  while (node) {
    tmp = node.next;

    node.next = previous;
  
    previous = node;

    node = tmp;

  }

  return previous
};
