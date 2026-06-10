class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let scores = [];

        let a, b;
        
        for (let tok of tokens){
             if(tok === "+" || tok === "-" || tok === "*" || tok === "/"){
                
                let b = scores.pop();
                let a = scores.pop();

                switch(tok){
                    case "+":
                        scores.push(a + b)
                        break
                    case "-":
                        scores.push(a - b) 
                        break
                    case "*":
                        scores.push(a * b); 
                        break
                    case "/":
                        scores.push(Math.trunc(a / b))
                        break

                }
                }else{
                    scores.push(Number(tok))
                }   
        }
    
        return scores.pop()
    }
}
