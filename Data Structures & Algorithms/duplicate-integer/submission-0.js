class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const myset = new Set()

        for(let i = 0; i < nums.length; i ++){
            if(myset.has(nums[i])){
                return true
            }

            myset.add(nums[i])

        }

        return false

    }
}
