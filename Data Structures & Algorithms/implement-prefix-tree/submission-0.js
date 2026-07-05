class TrieNode{
    constructor(){
        this.children = new Map()
        this.endOfWord = false;
    }
}



class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;

        for(const char of word){
            if(!node.children.has(char)){
                node.children.set(char, new TrieNode())
            }

            node = node.children.get(char)
        }
    
        // at this point node is pointing to the last char
        node.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        for(const char of word){
            if(!node.children.has(char)){
                return false
            }

            node = node.children.get(char)
        }


        return node.endOfWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root
        for(const char of prefix){
            if(!node.children.has(char)){
                return false
            }

            node = node.children.get(char)
        }

        return true;
    }
}
