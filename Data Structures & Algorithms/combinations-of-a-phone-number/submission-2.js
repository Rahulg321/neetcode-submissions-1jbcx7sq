class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits === "") return [];

        const digitsToLetters = {
            2: ["a", "b", "c"],
            3: ["d", "e", "f"],
            4: ["g", "h", "i"],
            5: ["j", "k", "l"],
            6: ["m", "n", "o"],
            7: ["p", "q", "r", "s"],
            8: ["t", "u", "v"],
            9: ["w", "x", "y", "z"],
        };

        const digitsNumbers = digits.split("").map(Number);
        const res = [];

        const dfs = (i, current) => {
            if (i === digits.length) {
                res.push(current);
                return;
            }

            const letters = digitsToLetters[digitsNumbers[i]];
            for (const letter of letters) {
                dfs(i + 1, current + letter);
            }
        };

        dfs(0, "");

        return res;
    }
}
