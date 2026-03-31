class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {

        let res = []
        let path = []

        candidates.sort((a, b) => a-b);

        function dfs(i, cur, total){

            if(total === target){
                res.push([...cur])
                return
            }

            if(total > target || i >= candidates.length){
                return
            }


            cur.push(candidates[i])
            // if we just had i here so it will continue to resuse the same elements, now however it will continue to use the next one
            dfs(i + 1, cur, total + candidates[i])

            cur.pop()
            while(i + 1 < candidates.length && candidates[i] === candidates[i + 1]){
                i += 1
            }
            
            dfs(i + 1, cur, total)
        }


        dfs(0, path, 0)
        return res


    }
}