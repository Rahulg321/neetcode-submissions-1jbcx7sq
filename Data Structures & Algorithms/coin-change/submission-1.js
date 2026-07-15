class Solution {
    coinChange(coins, amount) {

        const memo = new Map();

        const dfs = (amount) => {
            if (amount === 0) return 0;

            if (memo.has(amount)) {
                return memo.get(amount);
            }

            let res = Infinity;

            for (const coin of coins) {
                if (amount - coin >= 0) {
                    res = Math.min(res, 1 + dfs(amount - coin));
                }
            }

            memo.set(amount, res);
            return res;
        };

        const ans = dfs(amount);

        return ans === Infinity ? -1 : ans;
    }
}