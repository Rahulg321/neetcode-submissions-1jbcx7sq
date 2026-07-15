class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {

        let res = nums[0]

        for(let i = 0; i < nums.length; i ++){
            let curr = nums[i];
            
            res = Math.max(res, curr)

            for(let j = i + 1; j < nums.length; j ++ ){
                curr *= nums[j]
                res = Math.max(res, curr);
            }
        }

        return res
    }
}
