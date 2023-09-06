/*
  725. Split Linked List in Parts
  Leet Code Link : https://leetcode.com/problems/split-linked-list-in-parts/

  Company Asked : Google, Amazone, Facebook, Instragram, Twitter

  T.C : O(k + L)  Or O((k * k / L) + x)
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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let result = new Array(k).fill(null);
    let l = 0;
    let curr = head;
    while(curr) {
        l++;
        curr= curr.next;
    }
    
    
    let eachNode = Math.floor(l / k);
    let reminder = l % k;
    
    curr = head;
    let prev = null;

    for(let i = 0; curr != null && i < k; i++) {
        result[i] = curr;
        for(let count = 1; count <= eachNode + (reminder > 0 ? 1 : 0); count++) {
            prev = curr;
            curr = curr.next;
        }
        reminder--;
        if(prev)
            prev.next = null;
    }
    return result;
};
