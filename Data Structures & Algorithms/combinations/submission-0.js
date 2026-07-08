class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const nums = Array.from({ length: n }, (_, i) => i + 1);
        const res = [];

        const backtrack = (i, subset) => {
            if (subset.length === k) {
                res.push([...subset]);
                return;
            }

            for (let j = i; j < n; j++) {
                subset.push(nums[j]);
                backtrack(j + 1, subset);
                subset.pop();
            }
        };

        backtrack(0, []);
        return res;
    }
}
