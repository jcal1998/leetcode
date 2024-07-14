class TrieNode {
    children: Map<string, TrieNode>
    isEndOfWord: boolean
    constructor() {
        this.children = new Map<string, TrieNode>()
        this.isEndOfWord = false
    }
}

class WordDictionary {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    addWord(word: string): void {
        let current = this.root
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode())
            }
            current = current.children.get(char)
        }
        
        current.isEndOfWord = true
    }

    search(word: string): boolean {
        return this.auxSearch(word, 0, this.root)
    }

    private auxSearch = (word: string, index: number, node: TrieNode) => {
        if (index === word.length) return node.isEndOfWord
        const char = word[index]
        if (char === '.') {
            for (const child of node.children.values()) {
                if (this.auxSearch(word, index + 1, child)) {
                    return true
                }
            }
            return false
        } else {
            if (!node.children.has(char)) return false
            return this.auxSearch(word, index + 1, node.children.get(char))
        }
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */