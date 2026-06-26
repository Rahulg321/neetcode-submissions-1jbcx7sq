class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        const nums1copy = nums1.slice(0, m)
        let idx = 0;
        let i = 0;
        let j = 0;

        while(idx < m + n){
            if(j >= n || (i < m && nums1copy[i] <= nums2[j])){
                nums1[idx] = nums1copy[i]
                idx++
                i++
            }else{
                nums1[idx] = nums2[j]
                idx++
                j++
            }
        }
    
    }
}
