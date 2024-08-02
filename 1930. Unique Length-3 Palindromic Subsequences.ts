function countPalindromicSubsequence(s: string): number {
  let count = 0;
  for (let i = 0; i < 26; ++i) {
    let currentChar = String.fromCharCode(i + 97);
    let l = s.indexOf(currentChar);
    let r = s.lastIndexOf(currentChar);
    if (l !== -1 && r !== -1 && l < r) {
      count += new Set(s.substring(l + 1, r)).size;
    }
  }
  return count;
}
