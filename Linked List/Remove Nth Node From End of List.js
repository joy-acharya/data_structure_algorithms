/*
  19. Remove Nth Node From End of List
  Leet code link : https://leetcode.com/problems/remove-nth-node-from-end-of-list/
*/
var removeNthFromEnd = function(head, n) {
        let start = new ListNode();
        start.next = head;
        let turtle = start, deer = start;

        for (let i = 1; i <= n + 1; i++) {
            deer = deer.next;
        }
        
        while (deer != null) {
            turtle = turtle.next;
            deer = deer.next;
        }
   
       turtle.next = turtle.next.next;
       return start.next;
};
