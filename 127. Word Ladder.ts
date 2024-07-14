function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const wordListSet = new Set(wordList);
  if (!wordListSet.has(endWord)) return 0;

  const isOneLetterDiff = (w1: string, w2: string) => {
    let count = 0;
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== w2[i]) count++;
      if (count > 1) return false;
    }

    return count === 1;
  };

  const visited = new Set<string>([beginWord]);
  const queue: [string, number][] = [[beginWord, 1]];

  while (queue.length) {
    const [curWord, mov] = queue.shift();

    for (const word of wordListSet) {
      if (isOneLetterDiff(curWord, word) && !visited.has(word)) {
        if (word === endWord) return mov + 1;
        visited.add(word);
        queue.push([word, mov + 1]);
      }
    }
  }

  return 0;
}
