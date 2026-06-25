class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = ""
        let left = 0;
        let right = 0;

        while(left < word1.length && right < word2.length){
            result += word1[left]
            result += word2[right]

            left++;
            right++;
        
        }


        if(left < word1.length){
            result += word1.substring(left)
        }


        if(right < word2.length){
            result += word2.substring(right)
        }

        return result;
    
    }
}
