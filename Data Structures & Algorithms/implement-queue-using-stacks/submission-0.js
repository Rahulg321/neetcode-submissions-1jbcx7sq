class MyQueue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x){
       
       while(!this.empty()){
        this.s2.push(this.s1.pop())
       }
       
        this.s2.push(x);
       
        while(this.s2.length > 0){
             this.s1.push(this.s2.pop())
       }
     
    }

    /**
     * @return {number}
     */
    pop(){
        return this.s1.pop()
    }

    /**
     * @return {number}
     */
    peek(){
        return this.s1[this.s1.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty(){
        return this.s1.length === 0;
    }
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
