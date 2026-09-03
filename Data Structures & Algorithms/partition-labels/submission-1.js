class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const last = new Array(26);

        for(let i = 0; i < S.length; i ++){
            last[S.charCodeAt(i) - 97] = i;
        }


        let res = [];
        let size = 0, end = 0;

        for(let i = 0; i < S.length; i ++){
            size ++;

            end = Math.max(end, last[S.charCodeAt(i) - 97]);
            if(i === end){
                res.push(size)
                size = 0
            }


        }

        return res;
    }
}
