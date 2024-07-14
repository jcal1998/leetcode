class TrieNode {
    children: Map<string, TrieNode>
    isEnd: boolean

    constructor() {
        this.children = new Map<string, TrieNode>()
        this.isEnd = false
    }
}

class Trie {
    root: TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string) {
        let current = this.root
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode())
            }
            current = current.children.get(char)!
        }
        current.isEnd = true
    }

    getRoot() {
        return this.root
    }
} 
function findWords(board: string[][], words: string[]): string[] {
    const result: string[] = []
    const trie = new Trie()
    const root = trie.getRoot()
    const rowLen = board.length
    const colLen = board[0].length
    const directions = [[1,0], [-1, 0], [0, 1], [0, -1]]

    for (const word of words) {
        trie.insert(word)
    }

    const dfs = (node: TrieNode, x: number, y: number, cur: string) => {
        if (node.isEnd) {
            result.push(cur)
            node.isEnd = false // Evitar duplicados
        }

        if (x < 0 || x >= rowLen || y < 0 || y >= colLen || board[x][y] === '#' || !node.children.has(board[x][y])) {
            return
        }

        const char = board[x][y]
        const next = node.children.get(char)!
        board[x][y] = '#'

        for (const [dx, dy] of directions) {
            dfs(next, x + dx, y + dy, cur + char)
        }

        board[x][y] = char
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (root.children.has(board[i][j])) {
                dfs(root, i, j, '')
            }
        }
    }

    return result
}