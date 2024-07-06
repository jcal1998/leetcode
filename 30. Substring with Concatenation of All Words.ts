function findSubstring(s: string, words: string[]): number[] {
  const stringMap = {};
  const subStringLen = words[0].length;
  const wordsLen = words.length;
  const window = subStringLen * wordsLen;
  const result = [];

  words.forEach((word) => {
    stringMap[word] = (stringMap[word] || 0) + 1;
  });

  for (let i = 0; i <= s.length - window; i++) {
    let j = 0;
    const tempStringMap = {};
    while (j < wordsLen) {
      const start = i + j * subStringLen;
      const curString = s.substring(start, start + subStringLen);

      if (!stringMap[curString]) break;

      tempStringMap[curString] = (tempStringMap[curString] || 0) + 1;

      if (tempStringMap[curString] > stringMap[curString]) break;
      j++;
    }

    if (j === wordsLen) result.push(i);
  }

  return result;
}
