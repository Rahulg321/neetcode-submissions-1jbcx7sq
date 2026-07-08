class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        function backtrack(currentString, openCount, closeCount) {
            if (openCount === closeCount && openCount === n) {
                res.push(currentString);
                return;
            }

            if (closeCount < openCount) {
                backtrack(currentString + ")", openCount, closeCount + 1);
            }

            if (openCount < n) {
                backtrack(currentString + "(", openCount + 1, closeCount);
            }
        }

        backtrack("", 0, 0);
        return res;
    }
}
