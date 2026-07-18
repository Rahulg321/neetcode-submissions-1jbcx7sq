class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    integerBreak(n) {
        const dp = new Map();
        dp.set(1, 1);

        const dfs = (num) => {
            if (dp.has(num)) return dp.get(num);

            let res = num === n ? 0 : num;
            for (let i = 1; i < num; i++) {
                // break down the subproblems
                // if its value is greater than the number itself
                const val = dfs(i) * dfs(num - i);
                res = Math.max(res, val);
            }

            dp.set(num, res);
            return res;
        };

        return dfs(n);
    }
}
