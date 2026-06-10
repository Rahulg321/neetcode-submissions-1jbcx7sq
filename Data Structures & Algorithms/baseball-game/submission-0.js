class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let scores = [];

        let a, b;
        
        for (let ops of operations){
            switch(ops){
                case "+":
                    a = scores[scores.length - 1]
                    b = scores[scores.length - 2]
                    scores.push(a + b)
                    break
                case "D":
                    a = scores[scores.length - 1 ];
                    scores.push(a * 2); 
                    break
                case "C":
                    scores.pop()
                    break
                default:
                    scores.push(Number(ops))
                    break

            }
        }
    
        return scores.reduce((a, c) => a + c, 0);


    }
}
