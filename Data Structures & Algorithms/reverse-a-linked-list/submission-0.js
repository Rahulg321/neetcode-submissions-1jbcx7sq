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
     * @return {ListNode}
     */
    reverseList(head) {

        if(!head){
            return head
        }

        if(head.next === null || head === null){
            return head
        }

        let prevNode = null
        let currNode = head

        while(currNode !== null){
            let nextNode = currNode.next

            currNode.next = prevNode;
            prevNode = currNode
            currNode = nextNode
        }

        return prevNode

    }
}
