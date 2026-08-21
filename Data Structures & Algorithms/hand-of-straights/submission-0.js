class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) {
            return false;
        }

        const count = {};

        for (const n of hand) {
            count[n] = (count[n] || 0) + 1;
        }

        const minPq = new MinPriorityQueue();
        for (const key in count) {
            minPq.push(Number(key));
        }

        while (!minPq.isEmpty()) {
            const first = minPq.front();

            for (let i = first; i < first + groupSize; i++) {
                if (!(i in count) || count[i] === 0) {
                    return false;
                }

                count[i] -= 1;
                if (count[i] === 0) {
                    if (i !== minPq.front()) {
                        return false;
                    }

                    minPq.pop();
                }
            }
        }

        return true;
    }
}
