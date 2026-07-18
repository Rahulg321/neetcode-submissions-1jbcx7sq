class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        const dp = Array(n + 1).fill(n);
        dp[0] = 0;

        for(let target = 1; target <= n; target++){
            for(let s = 1; s * s <= target; s++){
                dp[target] = Math.min(dp[target], 1 + dp[target - s * s])
            }
        }

        return dp[n]

    }
}
