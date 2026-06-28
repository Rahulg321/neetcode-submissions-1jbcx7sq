class StockSpanner {
    constructor() {
        this.stream = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        this.stream.push(price)
        let result = 0 

        for(let i = this.stream.length - 1; i >=0; i--){
            let curr = this.stream[i]
            if(curr <= price){
                result += 1
            }else{
                break
            }
        }

        return result; 
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
