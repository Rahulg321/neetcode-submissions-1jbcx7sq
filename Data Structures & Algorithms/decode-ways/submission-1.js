class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const dp = new Map()
        dp.set(s.length, 1);

        const dfs = (i) => {
    
            if(dp.has(i)){
                return dp.get(i)
            }
    
            if (i === s.length) return 1;
            if (s[i] === "0") return 0;

            let res = dfs(i + 1);

            if (i < s.length - 1) {
                if (s[i] === "1" || (s[i] === "2" && s[i + 1] < "7")) {
                    res += dfs(i + 2);
                }
            }

            dp.set(i, res)
            return res;
        };

        return dfs(0);
    }

    getLetterPosition(char) {
        return char.charCodeAt(0) - 64;
    }
}
