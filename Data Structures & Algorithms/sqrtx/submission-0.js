class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x === 0)return 0
        let res = 1;

        for(let i = 1; i <= x; i ++){
            if(i*i > x){
                return res
            }

            res = i; 
        }

        return res;
    }
}
