/*
  143. Reorder List
  Leet Code Link : https://leetcode.com/problems/reorder-list/
  Asked By : Amazon, Microsoft
  T.C : O(n)
  S.C : O(1)
*/


var reorderList = function(head) {
    let curr = head;
    
    function solve(head) {
        if(head == null) return;
        solve(head.next);
        
        let tmp = curr.next;
        
        if(tmp == null) return;
        else if(head == curr) {
            head.next = null;
            return;
        }   
        curr.next = head;
        head.next = tmp == head ? null : tmp;
        curr = tmp;
    }
    
    return solve(head);
};


