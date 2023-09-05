/*
  138. Copy List with Random Pointer
  Leet code link : https://leetcode.com/problems/copy-list-with-random-pointer/
*/


/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
	// Inserting new nodes in between
        if(head == NULL) return head;
        Node* curr = head;
        while(curr != NULL){
            Node*temp = curr->next;
            curr->next = new Node(curr->val);
            curr->next->next = temp;
            curr = temp;
        }
        curr = head;
        //setting random pointer to new node
        while(curr != NULL){
            if(curr->next != NULL){
                curr->next->random = (curr->random != NULL)?curr->random->next:NULL;
            }            
            curr = curr->next->next;
        }
        //seperate both linked lists
        Node*orign = head,*copy = head->next;
        Node*temp = copy;
        
        while(orign != NULL){
            orign->next = orign->next->next;
            copy->next = (copy->next!=NULL)?copy->next->next:NULL;
            orign = orign->next;
            copy = copy->next;
        }
        return temp;
        
    }
};
