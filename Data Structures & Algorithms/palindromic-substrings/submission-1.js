class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;

        const isPalindrome = (l, r) => {
            while (l < r) {
                if (s[l] !== s[r]) {
                    return false;
                }

                l++;
                r--;
            }

            return true;
        };

        const dfs = (i) => {
            if (i === s.length) return;

            for (let j = i; j < s.length; j++) {
                if (isPalindrome(i, j)) {
                    res += 1;
                }
            }
            dfs(i + 1);
        };

        dfs(0);

        return res;
    }
}
