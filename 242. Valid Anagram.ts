function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const counMap = {};

  for (let letter of s) {
    counMap[letter] = (counMap[letter] || 0) + 1;
  }

  for (let letter of t) {
    counMap[letter] = (counMap[letter] || 0) - 1;
    if (counMap[letter] < 0) return false;
  }

  return true;
}
