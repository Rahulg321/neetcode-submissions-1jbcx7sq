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
    rob(root) {
        const [withRoot, withoutRoot] = this.tarverse(root);
        return Math.max(withRoot, withoutRoot);
    }

    tarverse(node) {
        if (!node) {
            return [0, 0];
        }

        const left = this.tarverse(node.left)
        const right = this.tarverse(node.right)

        const withRoot = node.val + left[1] + right[1]
        const withoutRoot = Math.max(left[0], left[1])  + Math.max(right[0], right[1]);

        return [withRoot, withoutRoot] 
    }
}
