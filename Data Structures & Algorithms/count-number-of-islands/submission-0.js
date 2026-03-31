class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        const visited = new Set()
        let count = 0

        for(let r = 0; r < grid.length; r ++){
            for(let c = 0; c < grid[0].length; c++){
                if(this.explore(grid, r, c, visited) === true){
                    count += 1
                }
            }
        }


        return count
    }


    explore(grid, r, c, visited){

        let rowInbounds = 0 <= r && r < grid.length
        let colInbounds = 0 <= c && c < grid[0].length

        if(!rowInbounds || !colInbounds) return false

        if(grid[r][c] === "0") return false



        const pos = `${r},${c}`
        if(visited.has(pos)) return false
        
        visited.add(pos)

        this.explore(grid, r - 1, c, visited)
        this.explore(grid, r + 1, c, visited)
        this.explore(grid, r, c + 1, visited)
        this.explore(grid, r, c - 1, visited)


        return true

    }

}
