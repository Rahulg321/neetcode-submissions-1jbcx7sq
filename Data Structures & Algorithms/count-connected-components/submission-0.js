class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = new Map();

        for (let i = 0; i < n; i++) {
            adj.set(i, []);
        }

        for (const [u, v] of edges) {
            adj.get(u).push(v);
            adj.get(v).push(u);
        }

        const visited = new Set();

        const dfs = (node) => {
            visited.add(node);

            for (const neighbor of adj.get(node)) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };

        let components = 0;

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                dfs(i);
                components++;
            }
        }

        return components;
    }
}
