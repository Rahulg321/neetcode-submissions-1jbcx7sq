class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const visited = new Set()
        let longest = 0

        for(let r = 0; r < grid.length; r ++){
            for(let c = 0; c < grid[0].length; c++){
                let size = this.explore(grid, r, c, visited)
                if(size > longest){
                    longest = size
                }
            }
        }
        return longest
    }

     explore(grid, r, c, visited){
        let rowInbounds = 0 <= r && r < grid.length
        let colInbounds = 0 <= c && c < grid[0].length
        if(!rowInbounds || !colInbounds) return 0
        if(grid[r][c] === 0) return 0
        const pos = `${r},${c}`
        if(visited.has(pos)) return 0
        
        visited.add(pos)
        let size = 1

        size += this.explore(grid, r - 1, c, visited)
        size += this.explore(grid, r + 1, c, visited)
        size += this.explore(grid, r, c + 1, visited)
        size += this.explore(grid, r, c - 1, visited)


        return size

    }


}
