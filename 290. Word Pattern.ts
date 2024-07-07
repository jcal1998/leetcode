function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");
  if (words.length !== pattern.length) return false;

  const sToPattern = {};
  const patternToS = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const char = pattern[i];

    if (!sToPattern.hasOwnProperty(word)) {
      sToPattern[word] = char;
    } else if (sToPattern[word] !== char) {
      return false;
    }

    if (!patternToS.hasOwnProperty(char)) {
      patternToS[char] = word;
    } else if (patternToS[char] !== word) {
      return false;
    }
  }

  return true;
}
