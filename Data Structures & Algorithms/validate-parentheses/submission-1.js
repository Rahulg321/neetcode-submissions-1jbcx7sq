class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        if(s.length === 1){
            return false
        }

        let bracketStack = []

        for(let i = 0; i <= s.length - 1; i ++){
            if(s[i] === "(" || s[i] === "{" || s[i] === "["){
                bracketStack.push(s[i])
            }else if(s[i] === ")" || s[i] === "}" || s[i] === "]"){
                
                if(bracketStack.length === 0){
                    return false
                }
                
                const poppedBracket = bracketStack.pop();

                if(s[i] === ")" && poppedBracket !== "(" 
                || s[i] === "]" && poppedBracket !== "["
                || s[i] === "}" && poppedBracket !== "{"
                ){
                    return false
                }
            }
        }
        return bracketStack.length === 0
    }
}
