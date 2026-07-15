class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        
        const memo = new Map() 
        
        const dfs = (i) => {
            if(i === s.length) return true;


            // check from our cache
            if(memo.has(i)) return memo.get(i)



            for(const word of wordDict){
                if(s.startsWith(word, i)){
                    if(dfs(i + word.length)){
                        memo.set(i, true);
                        return true;
                    }
                }
            }


            memo.set(i, false)
            return false;

        }


        return dfs(0)

    }
}
