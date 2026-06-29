class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        const prefix = [];

        prefix[0] = nums[0];


        // build the array for prefixes
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] + nums[i];
        }

        let minLength = Infinity;

        for(let r = 0; r < nums.length;r++){
            while(l <= r){
            const sum = l === 0 ? prefix[r] : prefix[r] - prefix[l - 1]

            if(sum >= target){
                minLength = Math.min(minLength, (r- l + 1))
                l++
            }else{
                break
            }

            }
            


        }

        return minLength === Infinity? 0 : minLength
    }
}
