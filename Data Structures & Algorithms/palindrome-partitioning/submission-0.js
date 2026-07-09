class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = []
        const parts = []

        const dfs = (i) =>{
            
            if(i === s.length){
                res.push([...parts])
                return
            }
            
            for(let j = i; j < s.length; j ++){
                  if(this.isPalindrome(s,i, j)){
                        parts.push(s.substring(i, j + 1))
                        dfs(j + 1)
                        parts.pop()
                  }
            }
        }

        dfs(0)

        return res;
    }

    isPalindrome(s, l, r){
        while (l < r){
            if(s[l] !== s[r]){
                return false
            }

            l++;
            r--;
        }

        return true;
    }
}
