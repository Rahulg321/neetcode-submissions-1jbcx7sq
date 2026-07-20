class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adjList = new Map();
        const memo = new Map();

        for (const [u, v] of prerequisites) {
            if (!adjList.has(u)) adjList.set(u, []);
            adjList.get(u).push(v);
        }


        const dfs = (course, target, visited) => {

            if(course === target) return true
            const key = `${course},${target}`;
            if (memo.has(key)) return memo.get(key);

            if(visited.has(course)) return false
            
            visited.add(course);
            for (const pre of (adjList.get(course) ?? [])) {
                if (dfs(pre, target, visited)){
                    memo.set(key, true)
                    return true
                } ;
            }

            memo.set(key, false)
            return false
            
        };

        const answers = []

        for (const [qu, qj] of queries) {
            answers.push(dfs(qu, qj, new Set()))
        }

        return answers;
    }
}
