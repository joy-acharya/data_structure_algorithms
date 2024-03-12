/*
  1171. Remove Zero Sum Consecutive Nodes from Linked List
  Leet Code Link : https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/?envType=daily-question&envId=2024-03-12
  T.C : O(n^2)
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
var removeZeroSumSublists = function(head) {
    let prefix = 0;
    let map = new Map();
    let dummy = new ListNode(0);
    dummy.next = head;
    map.set(prefix, dummy);
    
    while(head) {
        prefix += head.val;
        if(map.has(prefix)) {
            let P = map.get(prefix);
            let start = P;
            let pSum = prefix;
            
          while(start != head) {
                start = start.next;
                pSum += start.val;
                if(start != head) {
                    map.delete(pSum);
                }
            }
          
            P.next = start.next;
        } else {
            map.set(prefix, head);
        }
        head = head.next;
    }
    return dummy.next;
};
