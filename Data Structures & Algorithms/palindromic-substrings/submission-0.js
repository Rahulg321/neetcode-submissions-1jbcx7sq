class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let reslen = 0;

        for (let i = 0; i < s.length; i++) {
            // odd length strings
            let l = i;
            let r = i;

            while (l >= 0 && r < s.length && s[l] === s[r]) {
                reslen ++;
                l -= 1;
                r += 1;
            }

            l = i;
            r = i + 1;

            while (l >= 0 && r < s.length && s[l] === s[r]) {
                reslen ++;
                l -= 1;
                r += 1;
            }
        }

        return reslen;
    }
}
