class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        const visit = new Set(deadends);
        if (visit.has("0000")) return -1;

        const children = (lock) => {
            const res = [];
            for (let i = 0; i < 4; i++) {
                const up = lock.slice(0, i) + ((+lock[i] + 1) % 10) + lock.slice(i + 1);
                const down = lock.slice(0, i) + ((+lock[i] - 1 + 10) % 10) + lock.slice(i + 1);
                res.push(up, down);
            }
            return res;
        };

        const queue = new Queue([["0000", 0]]);
        visit.add("0000");

        while (!queue.isEmpty()) {
            const [lock, turns] = queue.pop();

            if (lock === target) return turns;

            for (const child of children(lock)) {
                if (!visit.has(child)) {
                    visit.add(child);
                    queue.push([child, turns + 1]);
                }
            }
        }

        return -1;
    }
}
