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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let carry = 0;
        let resultList = new ListNode(0)
        let sum = 0
        let current = resultList

        while(l1 || l2 || carry){


            let v1 = l1 ? l1.val : 0
            let v2 = l2 ? l2.val : 0

            sum = carry + v1 + v2 

            const onesPlace = sum % 10;
            const tensPlace = Math.floor(sum / 10);

            current.next = new ListNode(onesPlace)
            current = current.next

            carry = tensPlace

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;

        }

        return resultList.next


    }
}
