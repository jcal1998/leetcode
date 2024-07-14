function minMutation(startGene: string, endGene: string, bank: string[]): number {
    const geneBank = new Set(bank)
    if (!geneBank.has(endGene)) return -1

    const isOneLetterDiff = (g1: string, g2: string) => {
        let count = 0
        for (let i = 0; i < g1.length; i++) {
            if (g1[i] !== g2[i]) count++
            if (count > 1) return false
        }

        return count === 1
    }

    const visited = new Set<string>(startGene)
    const queue: [string, number][] = [[startGene, 0]]

    while (queue.length) {
        const [cur, mov] = queue.shift()
        for (const gene of geneBank) {
            if (isOneLetterDiff(gene, cur) && !visited.has(gene)) {
                if (endGene === gene) return mov + 1
                visited.add(gene)
                queue.push([gene, mov + 1])
            }
        }
    }

    return -1;
}
