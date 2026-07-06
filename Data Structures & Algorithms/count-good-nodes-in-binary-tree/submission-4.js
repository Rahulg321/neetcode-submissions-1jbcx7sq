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
    goodNodes(root) {
        let goodNode = 0;

        const dfs = (node, maxVal) => {
            if (!node) return 0;

            if (node.val >= maxVal) goodNode += 1;
            const maxSoFar = Math.max(node.val, maxVal);

            dfs(node.left, maxSoFar);
            dfs(node.right, maxSoFar);
        };

        dfs(root, root.val);

        return goodNode;
    }
}
