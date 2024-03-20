/*
      1669. Merge In Between Linked Lists
      Leet Code Link : https://leetcode.com/problems/merge-in-between-linked-lists/
      Asked By : Facebook, Intragram
      T.C : O(m+n)
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let list1head = null;    
    let list1tail = list1;
    
    for(let i = 0; i <= b; i++) {
        if(i == a-1) {
            list1head = list1tail
        }
        list1tail = list1tail.next;  
    }
    
    
    let list2Tail = list2; 
    
    while(list2Tail.next != null) {
        list2Tail = list2Tail.next;
    }
    
    
    list1head.next = list2;
    
     list2Tail.next = list1tail;
    
    return list1;
};
