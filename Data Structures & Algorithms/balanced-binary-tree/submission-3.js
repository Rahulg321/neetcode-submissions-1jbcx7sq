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
        if(!root) return true

        let leftHeight = this.calculateTreeHeight(root.left)
        let rightHeight = this.calculateTreeHeight(root.right)

        return this.isBalanced(root.left) && this.isBalanced(root.right) && Math.abs(leftHeight - rightHeight) <= 1

    }
    
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    calculateTreeHeight(root) {
        if(!root) return 0
        return 1 + Math.max(this.calculateTreeHeight(root.left), this.calculateTreeHeight(root.right))

    }
}
