class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = new Map();

        for(const [u, v] of prerequisites){
            if(!adj.has(u)) adj.set(u, [])
            adj.get(u).push(v)
        }

        const visiting = new Set();
        const visited = new Set();

        const dfs = (course) => {
            if(visiting.has(course)) return false;
            if(visited.has(course)) return true;

            visiting.add(course)

            for(const prerequisite of (adj.get(course) ?? [])){
                if(!dfs(prerequisite)) return false;
            }

            visiting.delete(course);
            visited.add(course);
            return true;
        }

        for(let c = 0; c < numCourses; c++){
           if(!dfs(c)) return false 
        }

        return true

    }
}
