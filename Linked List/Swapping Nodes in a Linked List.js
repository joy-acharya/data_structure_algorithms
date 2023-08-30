/*
    1721. Swapping Nodes in a Linked List
    Leet code link : https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
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
var swapNodes = function(head, k) {
    let tmp = head;
    let tmp2 = head;
    let a = [];
    let cnt = 0;
    while(tmp) {
        a.push(tmp.val);
        tmp = tmp.next;
        cnt++;
    }

    let n = cnt - k + 1;

    if(n == k)
        return head;
    let f = head;
    let l = head;

    for(let i = 1; i < k; i++) {
        f = f.next;
    }

    for(let i = 1; i < n; i++) {
        l = l.next;
    }

    let p = f.val;
    f.val = l.val;
    l.val = p;
    
    return head;
};
