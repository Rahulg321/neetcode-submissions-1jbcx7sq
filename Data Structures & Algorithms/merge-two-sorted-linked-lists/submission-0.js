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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let head = new ListNode();   
        let curr = head;   
        let left = list1;   
        let right = list2;   

        while(left && right){
            if(left.val <= right.val){
                curr.next = left
                left = left.next
            }else{
                curr.next = right
                right = right.next

            }

            curr = curr.next

        }


    curr.next = left || right;

    return head.next;

    }
}
