/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root && !subRoot) return true
        if(!root || !subRoot) return false

        let queue = [root]

        while(queue.length > 0){
            let currElement = queue.shift()

            if(currElement.val === subRoot.val){
               if(this.isSameTree(currElement ,subRoot)) return true
            }

            if(currElement.left){
                queue.push(currElement.left)
            }

            if(currElement.right){
                queue.push(currElement.right)
            }
        }
        return false
    }



    isSameTree(p, q){
        if(!p && !q) return true
        if(!p || !q) return false

        if(p.val !== q.val) return false

        let leftSubtreeSame = this.isSameTree(p.left , q.left)
        let rightSubtreeSame = this.isSameTree(p.right , q.right)

        return leftSubtreeSame && rightSubtreeSame

    }





}
