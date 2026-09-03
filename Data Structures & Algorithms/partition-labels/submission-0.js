class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let lastIndexMap = new Map();
        for(let i = 0 ; i < S.length; i ++){
            lastIndexMap.set(S[i], i);
        }

        let res = []
        let size = 0, end = 0;

        for(let i = 0; i < S.length; i ++){
            size++;

            end = Math.max(end, lastIndexMap.get(S[i]));
            if(i === end){
                res.push(size);
                size = 0
            }

        }

        return res;
    }
}
