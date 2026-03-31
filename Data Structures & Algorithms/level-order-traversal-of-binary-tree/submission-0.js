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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []

        let queue = [root]
        let resultingList = []

        while (queue.length > 0) {
            let levelSize = queue.length
            let levelNodes = []
            for(let i = 0; i < levelSize; i ++){
                let currNode = queue.shift()
                levelNodes.push(currNode.val)

                if(currNode.left){
                    queue.push(currNode.left)
                }

                if(currNode.right){
                    queue.push(currNode.right)
                }
            }

            resultingList.push(levelNodes)


        }

        return resultingList

    }
}
