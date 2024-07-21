function countPrefixSuffixPairs(words: string[]): number {
  let count = 0;

  const isprefixAndSuffix = (word1: string, word2: string) => {
    const wLen = word1.length;
    return (
      word2.substring(0, wLen) === word1 &&
      word2.substring(word2.length - wLen) === word1
    );
  };

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isprefixAndSuffix(words[i], words[j])) {
        count++;
      }
    }
  }

  return count;
}
