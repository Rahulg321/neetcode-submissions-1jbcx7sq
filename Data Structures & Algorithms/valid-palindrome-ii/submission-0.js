class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
       function isPalindrome(left, right) {
            while (left < right) {
                if (s[left] !== s[right]) return false;
                left++;
                right--;
            }
            return true;
        }
       
        let l = 0;
        let r = s.length - 1 

        while(l < r) {
            if(s[l] !== s[r]){
                return isPalindrome(l +1, r) || isPalindrome(l, r - 1)
            }

            l ++;
            r --;
        }

        return true
    }
}
