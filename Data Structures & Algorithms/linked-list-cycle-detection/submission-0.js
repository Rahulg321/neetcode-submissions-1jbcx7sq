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
     * @return {boolean}
     */
    hasCycle(head) {

        let visitedNodesSet = new Set()

        while(head.next !== null){

            if(visitedNodesSet.has(head)){
                return true
            }

            visitedNodesSet.add(head)

            head = head.next;

        }

    return false

    }
}
