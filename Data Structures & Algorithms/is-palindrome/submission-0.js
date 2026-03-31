class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        if(s.length <= 1){
            return true
        }

        const cleanedString = s
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
        let left = 0
        let right = cleanedString.length - 1


        while(left < right){
            if(cleanedString[left] !== cleanedString[right]){
                return false
            }

            left += 1;
            right -= 1;
        }
        return true
    }
}
