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
    
        return this.dfs(root,root.val)
    }


    dfs(node, maxVal){
        if(!node) return 0

        let result = node.val >= maxVal ? 1 : 0
        maxVal = Math.max(node.val, maxVal)

        result += this.dfs(node.left, maxVal)
        result += this.dfs(node.right, maxVal)
        return result
    }

}
