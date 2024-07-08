function lengthOfLastWord(s: string): number {
  const tString = s.trim();
  for (let i = tString.length - 1; i >= 0; i--) {
    if (i - 1 < 0 || tString[i - 1] === " ") {
      return tString.slice(i).length;
    }
  }
}
