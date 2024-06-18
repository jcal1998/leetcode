function isMatch(s: string, p: string): boolean {
  let patternIndex = 0;

  for (let i = 0; i < s.length; i++) {
    const ptn = p[patternIndex];
    if (s[i] === ptn || ptn === ".") {
      patternIndex++;
      continue;
    } else if (ptn === "*") {
      const prev = p[patternIndex - 1];
      if (patternIndex >= 0 && (s[i] === prev || prev === ".")) {
        continue;
      }
      return false;
    } else {
      if (patternIndex < s.length) {
        const next = p[patternIndex + 1];
        if (next === "*") {
          patternIndex += 2;
          continue;
        }
      }
      return false;
    }
  }

  return true;
}
