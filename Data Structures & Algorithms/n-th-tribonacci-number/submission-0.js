class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n, memo = {}) {
        if (n <= 2) {
            return n === 0 ? 0 : 1;
        }
        if (n in memo) return memo[n];

        memo[n] =
            this.tribonacci(n - 3, memo) + this.tribonacci(n - 1, memo) + this.tribonacci(n - 2, memo);

        return memo[n];
    }
}
