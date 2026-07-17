class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = nums.reduce((a, b) => a + b, 0);
        if (sum % 2 !== 0) return false;

        const target = sum / 2;

        const memo = new Map();

        const dfs = (i, target) => {
            if (target === 0) return true;

            if (i === nums.length || target < 0) {
                return false;
            }

            if (memo.has(`${i},${target}`)) {
                return memo.get(`${i},${target}`);
            }

            const ans = dfs(i + 1, target) || dfs(i + 1, target - nums[i]);
            memo.set(`${i},${target}`, ans);
            return ans;
        };

        return dfs(0, target);
    }
}
