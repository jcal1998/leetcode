function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = "";
  let letterIndex = 0;
  const firstWord = strs[0];
  while (letterIndex < firstWord.length) {
    for (let i = 0; i < strs.length; i++) {
      console.log(strs[i][letterIndex], firstWord[letterIndex]);
      if (
        letterIndex === strs[i].length ||
        firstWord[letterIndex] !== strs[i][letterIndex]
      )
        return commonPrefix;
    }
    commonPrefix += firstWord[letterIndex];
    letterIndex++;
  }

  return commonPrefix;
}

// refactor
function longestCommonPrefix2(strs: string[]): string {
  let commonPrefix = "";
  strs.sort();

  const firstWord = strs[0];
  const lastWord = strs[strs.length - 1];

  for (let i = 0; i < firstWord.length; i++) {
    if (i >= lastWord.length || firstWord[i] !== lastWord[i])
      return commonPrefix;
    commonPrefix += firstWord[i];
  }

  return commonPrefix;
}
