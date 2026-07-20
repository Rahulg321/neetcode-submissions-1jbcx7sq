class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        if(edges.length !== n - 1) return false 

        const adjList = new Map();
    
        for(const [u, v] of edges){
            if(!adjList.has(u)) adjList.set(u, [])
            if(!adjList.has(v)) adjList.set(v, [])

            adjList.get(u).push(v)
            adjList.get(v).push(u)
        }

        const visited = new Set();


        const dfs = (node, prev) => {
            visited.add(node)

            for(const neighbor of (adjList.get(node) ?? [])){
                if(neighbor === prev) continue
                if(visited.has(neighbor)) return false

                if(!dfs(neighbor, node)) return false
            }

            return true

        }

        return dfs(0, -1) && visited.size === n

    }
}
