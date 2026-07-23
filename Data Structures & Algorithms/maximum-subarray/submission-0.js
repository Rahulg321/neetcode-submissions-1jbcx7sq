class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        
        let best = nums[0]
        let current = nums[0]


        for(let i = 1; i < nums.length; i ++){
            const currValue = nums[i]
            current = Math.max(currValue, currValue + current);
            best = Math.max(current, best)
        }

        return best;
    }
}
