class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const n = nums.length;
        const tmp = new Array(n)

        for(let i = 0; i < n; i ++){
            tmp[(i+k) % n] = nums[i]
        }
        
        for(let i = 0; i < n; i ++){
            nums[i] = tmp[i];
        }

        
    
    }
}
