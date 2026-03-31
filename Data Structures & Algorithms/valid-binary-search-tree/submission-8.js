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
    isValidBST(root) { 
        return this.checkValid(root, -Infinity, + Infinity)

    }


    checkValid(node, minVal, maxVal){

        if(!node) return true

        if(node.val <= minVal || node.val >= maxVal) return false

        return this.checkValid(node.left, minVal, node.val) && this.checkValid(node.right, node.val, maxVal)

    }

  


}
