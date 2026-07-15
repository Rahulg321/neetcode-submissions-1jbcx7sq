class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
       let best = nums[0] 
       let minEnding = nums[0] 
       let maxEnding = nums[0] 

        for(let i = 1; i < nums.length; i ++){
            const num = nums[i]
            
            const prevMax = maxEnding
            const prevMin = minEnding


            minEnding = Math.min(
                num, 
                num * prevMax, 
                num * prevMin
            )

            maxEnding = Math.max(
                num, 
                num * prevMax, 
                num * prevMin
            )

            best = Math.max(maxEnding, best)

        }

        return best
    }
}
