class Node{
    constructor(key = -1, val = -1, next = null){
        this.key = key
        this.val = val
        this.next = null
    
    }
}


class MyHashMap {
    constructor() {
        this.map = Array.from({length:1000}, ()=> new Node())
    }

    hash(key){
        return key % this.map.length;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const index = this.hash(key)
        let curr = this.map[index]

        while(curr.next){
            if(curr.next.key === key){
                curr.next.val = value
                return 
            }

            curr = curr.next
        }

        curr.next = new Node(key, value)

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const index = this.hash(key)
        let curr = this.map[index]

        while(curr){
            if(curr.key === key){
                return curr.val 
            }
        
            curr = curr.next
        
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.hash(key)
        let curr = this.map[index]

        while(curr.next){
            if(curr.next.key === key){
                curr.next = curr.next.next
                return  
            }

            curr = curr.next
       
        }

    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
