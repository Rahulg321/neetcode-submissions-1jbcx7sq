class Solution {
    /**
     * @param {string} a
     * @param {string} b
     * @return {string}
     */
    addBinary(a, b) {
        let res = [];
        let carry = 0;

        a = a.split("").reverse().join("");
        b = b.split("").reverse().join("");

        for (let i = 0; i < Math.max(a.length, b.length); i++) {
            const digitA = i < a.length ? a[i] - "0" : 0;
            const digitB = i < b.length ? b[i] - "0" : 0;

            const total = digitA + digitB + carry;
            const char = (total % 2).toString();
            res.push(char);

            carry = Math.floor(total / 2);
        }
        if (carry) {
            res.push("1");
        }

        res.reverse();
        return res.join("");
    }
}
