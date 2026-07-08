class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []
        this.dfs(nums, 0, [], res)
        return res;

    }

    dfs(nums, i, subset, res){
        res.push([...subset])

        for(let j = i; j < nums.length; j ++){
            subset.push(nums[j]);
            this.dfs(nums, j + 1, subset, res);
            subset.pop()
        }
    }

}
