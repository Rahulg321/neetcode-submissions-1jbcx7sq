class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const lastIndex = nums.length - 1

        const canReach = (i) => {
            if(i >= lastIndex) return true;

            for(let jump = 1; jump <= nums[i]; jump ++){
                if(canReach(i + jump)) return true
            }

            return false;
        }

        return canReach(0)
    }
}
