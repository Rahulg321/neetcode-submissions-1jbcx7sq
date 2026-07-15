class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const memo = new Map();

        const dfs = (i, prev) => {
            if (i === nums.length) return 0;

            const key = `${i},${prev}`;

            if (memo.has(key)) return memo.get(key);

            let skip = dfs(i + 1, prev);

            let take = 0;

            if (prev === -1 || nums[i] > nums[prev]) {
                take += 1 + dfs(i + 1, i);
            }

            const ans =  Math.max(skip, take);
            memo.set(key, ans)
            return ans


        };


        return dfs(0, -1);
    }
}
