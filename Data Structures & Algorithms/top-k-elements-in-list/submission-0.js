class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}

        for(let num of nums){
            count[num] = (count[num] || 0) + 1 
        }


        let minHeap = new MinPriorityQueue((a) => a[1])

        for(const [num, cnt] of Object.entries(count)){
            minHeap.enqueue([num, cnt])

            if(minHeap.size() > k) minHeap.dequeue()

        }


        const res = []

        for(let i = 0; i < k; i++){
            const [num, cnt] = minHeap.dequeue()
            res.push(num)
        }


        return res;
    }
}
