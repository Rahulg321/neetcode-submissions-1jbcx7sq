class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        const memo = {}

        const dfs = (i) =>{
            if(i >= nums.length || i < 0) return 0
            if(i in memo) return memo[i]

            memo[i] = Math.max(nums[i] + dfs(i +2), dfs(i + 1))
            return memo[i]
        }

        return dfs(0)

    }
}
