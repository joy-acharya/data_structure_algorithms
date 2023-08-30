/*
  142. Linked List Cycle II
  Leet Code Link : https://leetcode.com/problems/linked-list-cycle-ii/
*/
 
var detectCycle = function(head) {
    let set = new Set();;
    let fast = head;
    while(fast != null && fast.next != null) {
        if(set.has(fast)) 
            return fast;
        else 
          set.add(fast);
        fast = fast.next;
    }
    return null;
};
