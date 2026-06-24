class Solution {
    
    merge(left, right){
        let result = []
        let leftIndex = 0
        let rightIndex = 0

        while(leftIndex < left.length && rightIndex < right.length){
            if(left[leftIndex] < right[rightIndex]){
                result.push(left[leftIndex]);
                leftIndex++;
            }else{
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result
        .concat(left.slice(leftIndex))
        .concat(right.slice([rightIndex]))

    }
    
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1){
            return nums
        }

        const middle = Math.floor(nums.length / 2);

        const leftHalf = nums.slice(0, middle)
        const rightHalf = nums.slice(middle)

        return this.merge(this.sortArray(leftHalf), this.sortArray(rightHalf))


    }
}
