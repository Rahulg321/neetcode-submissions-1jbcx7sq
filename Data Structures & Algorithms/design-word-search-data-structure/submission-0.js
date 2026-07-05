class TrieNode{
    constructor(){
        this.children = {} 
        this.endOfWord = false  
    }
}


class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root
        for (const char of word){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode()
            }
            curr = curr.children[char]
        }
        curr.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this.root)
    }

    dfs(word, index, node){
        if(!node) return false

        if(index === word.length) return node.endOfWord;

        const char = word[index];

        if(char === "."){
            for(const key in node.children){
                if(this.dfs(word, index + 1, node.children[key])){
                    return true
                }
            }

            return false
        }

        return this.dfs(word, index + 1, node.children[char])
    }



}
