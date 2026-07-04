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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true;

        const leftHeight = this.calculateHeight(root.left)
        const rightHeight = this.calculateHeight(root.right)

        if(Math.abs(leftHeight - rightHeight) > 1) return false

        return this.isBalanced(root.left)  && this.isBalanced(root.right)
    
    }

    // calculate and return the number of nodes from this tree node
    calculateHeight(node) {
        if (!node) return 0;
        return 1 + Math.max(this.calculateHeight(node.left), this.calculateHeight(node.right));
    }
}
