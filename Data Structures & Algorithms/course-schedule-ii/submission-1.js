class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        // if (prerequisites.length === 0) {
        //     return [];
        // }

        const adjList = new Map();

        for (const [u, v] of prerequisites) {
            if (!adjList.has(u)) {
                adjList.set(u, []);
            }

            adjList.get(u).push(v);
        }

        const visited = new Set();
        const visiting = new Set();
        const result = [];

        const dfs = (course) => {
            if (visiting.has(course)) {
                return false;
            }

            if (visited.has(course)) {
                return true;
            }

            visiting.add(course)

            for (const prerequisite of adjList.get(course) ?? []) {
                if(!dfs(prerequisite)){
                    return false
                }
            }


            visiting.delete(course)
            visited.add(course)
            result.push(course)
            return true
        };

        for (let course = 0; course < numCourses; course++) {
            if(!dfs(course)) return []
        }

        return result;
    }
}
