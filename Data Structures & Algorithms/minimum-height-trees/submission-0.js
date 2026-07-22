class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        if (n === 1) return [0];

        const adj = new Map();
        for (let i = 0; i < n; i++) {
            adj.set(i, []);
        }
        for (const [n1, n2] of edges) {
            adj.get(n1).push(n2);
            adj.get(n2).push(n1);
        }

        const edgeCount = Array(n).fill(0);
        const leaves = [];

        for (let i = 0; i < n; i++) {
            edgeCount[i] = adj.get(i).length;

            if (adj.get(i).length === 1) {
                leaves.push(i);
            }
        }

        while (leaves.length > 0) {
            if (n <= 2) return leaves;
            const size = leaves.length;

            for (let i = 0; i < size; i++) {
                const node = leaves.shift();
                n--;

                for (const nei of adj.get(node)) {
                    edgeCount[nei]--;

                    if (edgeCount[nei] === 1) {
                        leaves.push(nei);
                    }
                }
            }
        }

        return [];
    }
}
