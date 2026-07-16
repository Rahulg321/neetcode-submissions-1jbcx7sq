class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const cols = new Set();
        const posDiagonal = new Set();
        const negDiagonal = new Set();

        const res = [];
        const board = Array.from({ length: n }, () => {
            return Array(n).fill(".");
        });

        const backtrack = (r) => {
            if (r === n) {
                res.push(board.map((row) => row.join("")));
                return;
            }

            for (let c = 0; c < n; c++) {
                if (cols.has(c) || posDiagonal.has(r + c) || negDiagonal.has(r - c)) continue;
                cols.add(c);
                posDiagonal.add(r + c);
                negDiagonal.add(r - c);
                board[r][c] = "Q";

                backtrack(r + 1);

                cols.delete(c);
                posDiagonal.delete(r + c);
                negDiagonal.delete(r - c);
                board[r][c] = ".";
            }
        };

        backtrack(0)
        return res;
    }
}
