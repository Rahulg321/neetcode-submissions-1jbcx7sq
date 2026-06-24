class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const ROWS = matrix.length
        const COLS = matrix[0].length

        // initialize with empty zeros and an extra padding of a row and col
        this.sumMat = Array.from({length:ROWS + 1}, () => Array(COLS + 1).fill(0))

        for(let r = 0; r < ROWS; r++){
           for(let c = 0; c < COLS; c++){
                this.sumMat[r + 1][c + 1] = matrix[r][c] + this.sumMat[r][c + 1] + this.sumMat[r+ 1][c] - this.sumMat[r][c];
           } 
        }


    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1++;
        col1++;
        
        row2++;
        col2++;

        const above = this.sumMat[row1 - 1][col2];
        const bottomRight = this.sumMat[row2][col2];
        const left = this.sumMat[row2][col1 - 1];
        const topLeft = this.sumMat[row1 -1][col1 - 1]

        return bottomRight - above - left + topLeft
    
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
