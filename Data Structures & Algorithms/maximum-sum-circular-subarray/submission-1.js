class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let currMax = nums[0]
        let globalMax = nums[0]
        let currMin = nums[0]
        let globalMin = nums[0]

        let total = nums[0]

        for(let i = 1 ; i < nums.length; i ++){
            const value = nums[i]
            total += value

            currMax = Math.max(value, currMax + value);
            globalMax = Math.max(currMax, globalMax);

            currMin = Math.min(value, currMin + value);
            globalMin = Math.min(currMin, globalMin);

        }

        if(globalMax < 0){
            return globalMax
        }

        return Math.max(total - globalMin, globalMax);

    }
}
