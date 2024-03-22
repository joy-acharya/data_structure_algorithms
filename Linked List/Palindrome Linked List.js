/*
  234. Palindrome Linked List
  Leet Code Link : https://leetcode.com/problems/palindrome-linked-list/?envType=daily-question&envId=2024-03-22
  Asked By : Google
*/


/* 
  Technique 1 
  T.C : O(n)
  S.C : (1)
*/

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    
    let prev = null;
    
    while(fast && fast.next) {
        fast = fast.next.next;
        
        let tmp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = tmp;
    }
    
    if(fast != null) {
        slow = slow.next;
    }
    
    while(prev != null) {
        if(prev.val != slow.val) {
            return false;
        }
        
        prev = prev.next;
        slow = slow.next;
    }
    
    return true;
};



/* 
  Technique 1 
  T.C : O(n)
  S.C : (1) Auxiliary space
*/

var isPalindrome = function(head) {
    let curr = head;
    
    
    function recur(head) {
        if(head == null) {
            return true;
        }
        
        let bol = recur(head.next);
        if(curr.val != head.val) {
            return false;
        }
        curr = curr.next;
        return bol;
    } 
    
    
    return recur(head);
};
