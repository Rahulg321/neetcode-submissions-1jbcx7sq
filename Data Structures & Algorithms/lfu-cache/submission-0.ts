class LFUNode{
    key:number;
    val:number;
    freq:number;
    prev:LFUNode | null;
    next:LFUNode | null;

    constructor(key:number, val:number){
        this.key = key
        this.val = val
        this.freq = 1
    }


}


class DoublyLinkedList{
    left:LFUNode;
    right:LFUNode;
    size:number;

    constructor(){
        this.left = new LFUNode(0, 0);
        this.right = new LFUNode(0, 0)
        this.left.next = this.right
        this.right.prev = this.left;
        this.size = 0;
    }


    removeHead():LFUNode {
        if(this.size === 0) return null
        const headNode = this.left.next
        this.removeNode(headNode);
        return headNode 
    }
    
    
    removeNode(node:LFUNode){
        const nxtNode = node.next;
        const prevNode = node.prev;

        prevNode.next = nxtNode;
        nxtNode.prev = prevNode;
        this.size--;
    
    }


    insertNode(node:LFUNode){
        const prevNode = this.right.prev;
        prevNode.next = node;
        node.prev = prevNode;
        node.next = this.right
        this.right.prev = node
        this.size++;
    }



}




class LFUCache {
    capacity:number;
    freqMap:Map<number, DoublyLinkedList>;
    minFreq:number;
    // map of the key with the node itself
    cache:Map<number, LFUNode>;
    
  
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.minFreq = 0
        this.freqMap =new Map();
        this.cache =new Map();
    }

    updateFrequency(node:LFUNode){
        const oldFreq = node.freq;
        const oldList = this.freqMap.get(oldFreq);

        oldList.removeNode(node)

        if(oldList.size === 0 && oldFreq === this.minFreq){
            this.minFreq++;
        }

        node.freq++;
        if(!this.freqMap.get(node.freq)){
            this.freqMap.set(node.freq, new DoublyLinkedList())
        }


        this.freqMap.get(node.freq).insertNode(node);

    }


    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(!this.cache.has(key)) return -1
        const node = this.cache.get(key)!;
        this.updateFrequency(node); // Boost its frequency ranking
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key: number, value: number): void {
        if(this.capacity === 0) return

        if(this.cache.has(key)){
            const node = this.cache.get(key)
            node.val = value 
            this.updateFrequency(node)
            return 
        }


        if(this.cache.size >= this.capacity){
            const minFreqList = this.freqMap.get(this.minFreq)!;
            const deadNode = minFreqList.removeHead();
            this.cache.delete(deadNode.key);
        }


        const newNode = new LFUNode(key, value)
        this.cache.set(key, newNode);
        this.minFreq = 1;

        if(!this.freqMap.has(1)){
            this.freqMap.set(1, new DoublyLinkedList());
        }

        this.freqMap.get(1)!.insertNode(newNode);

    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
