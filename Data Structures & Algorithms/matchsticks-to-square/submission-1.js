class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const total = matchsticks.reduce((a, b) => a + b);

        // its not evenly divided?
        if (total % 4 !== 0) return false;

        const target = total / 4;

        const sides = [0, 0, 0, 0];
        matchsticks.sort((a, b) => b - a);
        if (matchsticks[0] > target) return false;

        
        const backtrack = (i) => {
            if (i === matchsticks.length) {
                return (
                    sides[0] === target &&
                    sides[1] === target &&
                    sides[2] === target &&
                    sides[3] === target
                );
            }

            const stick = matchsticks[i];

            for (let side = 0; side < 4; side++) {
                if (sides[side] + stick > target) continue;

                sides[side] += stick;

                if (backtrack(i + 1)) return true;

                sides[side] -= stick;
            }

            return false;
        };

        return backtrack(0);
    }
}
