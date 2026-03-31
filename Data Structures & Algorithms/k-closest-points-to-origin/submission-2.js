class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {

        let kClosestPoints = []
        let minPq = new MinPriorityQueue((point) => point[0])


        for(let point of points){
            const [x, y] = point
            let distanceFromOrigin = Math.hypot(x, y)
            minPq.enqueue([distanceFromOrigin, x, y])
        }

        for(let i = 0; i < k; i ++){
            const [_, x, y] = minPq.dequeue() 
            kClosestPoints.push([x, y])
        }

        return kClosestPoints;

    }
}
