// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let oldToCopy = new Map()
        oldToCopy.set(null, null)
       
       
       
        let cur = head;

        while(cur){
            const copy = new Node(cur.val, null, null)
            oldToCopy.set(cur, copy)
            cur = cur.next
        }


        cur  = head

        while(cur){
            const copyNode = oldToCopy.get(cur)
            copyNode.next = oldToCopy.get(cur.next)
            copyNode.random = oldToCopy.get(cur.random)
            cur = cur.next
        }

        return oldToCopy.get(head)


    }
}
