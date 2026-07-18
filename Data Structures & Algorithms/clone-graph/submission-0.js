/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldToNew = new Map();
        return this.dfs(node, oldToNew);
    }

    dfs(node, oldToNew) {
        if (!node) return null;

        if (oldToNew.has(node)) return oldToNew.get(node);

        const copy = new Node(node.val);

        oldToNew.set(node, copy);

        for (const neighbor of node.neighbors) {
            copy.neighbors.push(this.dfs(neighbor, oldToNew));
        }

        return copy;
    }
}
