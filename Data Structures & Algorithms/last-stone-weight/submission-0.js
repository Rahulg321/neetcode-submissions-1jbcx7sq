class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxPq = new MaxPriorityQueue();

        for(const stone of stones){
            maxPq.enqueue(stone)
        }

        while(maxPq.size() > 1){
            const stone1 = maxPq.dequeue()
            const stone2 = maxPq.dequeue()

            if(stone1 !== stone2){
                maxPq.enqueue(stone1 - stone2)
            } 
        }


        return maxPq.size() === 1 ? maxPq.dequeue() : 0; 
    }
    }
