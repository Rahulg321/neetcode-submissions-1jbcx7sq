/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {

        if(!head || left === right) return head;

        let dummy = new ListNode(0, head);
        let prev = dummy

        // we need prev to be the node just before our main sublist starts
        for(let i = 1; i < left; i ++){
            prev = prev.next
        }


        let start = prev.next;
        let curr = start.next;



        for(let i = 0; i < right - left; i ++){
            start.next = curr.next;
            curr.next = prev.next
            prev.next = curr;
            
            curr = start.next;
        }


        return dummy.next;
    }
}
