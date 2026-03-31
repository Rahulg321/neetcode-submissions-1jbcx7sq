class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let left = 0
        let maxlen = 0

        const charSet = new Set();


        for(let right = 0; right < s.length; right ++){

            while(charSet.has(s[right])){
                //means we found a duplicate
                charSet.delete(s[left])
                left ++;
            }


            charSet.add(s[right]);
            maxlen = Math.max(maxlen, right - left + 1);
        }


        return maxlen;

    }
}
