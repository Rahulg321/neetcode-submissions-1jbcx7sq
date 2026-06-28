class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let arr = path.split("/").filter(item => item !== "" && item !== ".");
        let stack = []

        for(const item of arr){
            if(item === ".."){
                stack.pop();
            }else{
                stack.push(item)
            }
        }

        return "/" +stack.join("/")


    }
}
