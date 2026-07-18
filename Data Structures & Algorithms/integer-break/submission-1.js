class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    integerBreak(n) {
        const dp = new Array(n + 1).fill(0);
        dp[1] = 1;

        for (let i = 2; i <= n; i++) {
            dp[i] = 0;
            for (let j = 1; j < i; j++) {
                const val = Math.max(j, dp[j]) * Math.max(i - j, dp[i - j]);
                dp[i] = Math.max(dp[i], val);
            }
        }

        return dp[n];
    }
}
