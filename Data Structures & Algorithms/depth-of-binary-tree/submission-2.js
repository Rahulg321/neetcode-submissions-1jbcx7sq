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
     * @return {number}
     */
    maxDepth(root) {
        if(!root) return 0

        const leftSubtree = this.maxDepth(root.left)
        const rightSubtree = this.maxDepth(root.right)
    
        return Math.max(leftSubtree, rightSubtree) + 1
    
    }
}
