class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = "";
        let reslen = 0;

        for (let i = 0; i < s.length; i++) {
            // odd length strings
            let l = i;
            let r = i;

            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > reslen) {
                    res = s.slice(l, r + 1);
                    reslen = r - l + 1;
                }

                l -= 1;
                r += 1;
            }

            l = i;
            r = i + 1;

            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > reslen) {
                    res = s.slice(l, r + 1);
                    reslen = r - l + 1;
                }

                l -= 1;
                r += 1;
            }
        }

        return res;
    }
}
