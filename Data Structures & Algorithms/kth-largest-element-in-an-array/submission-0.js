class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {

        let maxPq = new MaxPriorityQueue()
        let kLargestElement;

        for(let num of nums){
            maxPq.enqueue(num)
        }

        for(let i = 0; i< k; i++){
            kLargestElement = maxPq.dequeue()
        }

        return kLargestElement;

    }
}
