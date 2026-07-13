class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        const robHouses = (houses) => {
            const memo = {};

            const dfs = (i) => {
                if (i < 0 || i >= houses.length) return 0;
                if (i in memo) return memo[i];

                memo[i] = Math.max(houses[i] + dfs(i + 2), dfs(i + 1));
                return memo[i];
            };

            return dfs(0)
        };

        return Math.max(
            robHouses(nums.slice(0, nums.length - 1)),
            robHouses(nums.slice(1)),
        );
    }
}
