class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {


        let l = 0;
        let r = nums.length - 1


        while(l <= r){
            const mid = Math.floor((l + r) / 2);
            const curr = nums[mid]


            if(curr === target) return mid

            if(nums[l] <= nums[mid]){
                // we are in left sorted array
                if(target > curr || target < nums[l]){
                    l = mid + 1
                }else{
                    r = mid - 1
                }
            }else{
                //we are in right sorted array

                if(target < curr || target > nums[r]){
                    r = mid - 1
                }else{
                    l = mid + 1;
                }
            }

        }


        return -1


    }
}
