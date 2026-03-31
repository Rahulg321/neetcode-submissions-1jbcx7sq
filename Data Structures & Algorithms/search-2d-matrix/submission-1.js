class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let searchResultIndex;

        for(let i = 0; i <= matrix.length - 1; i ++){
            searchResultIndex = this.search(matrix[i], target)

            if(searchResultIndex !== -1){
                return true
            }
        }

        return false

    }

     /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {


        let left = 0
        let right = nums.length - 1

        let midIndex;
        let middleValue;


        while (left <= right) {
            midIndex = Math.floor((left + right) / 2);
            middleValue = nums[midIndex]

            if(middleValue === target){
                return midIndex
            }
        
            if(middleValue < target){
                left = midIndex + 1
            }

            if(middleValue > target){
                right = midIndex - 1
            }
        }

        return -1

    }
}
