class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums, target) {
        const memo = new Map();

        const dfs = (remaining) => {
            if (remaining === 0) return 1;

            if (remaining < 0) return 0;

            if (memo.has(remaining)) return memo.get(remaining);

            let ways = 0;

            for (const num of nums) {
                ways += dfs(remaining - num);
            }

            memo.set(remaining, ways);

            return ways;
        };

        return dfs(target);
    }
}
