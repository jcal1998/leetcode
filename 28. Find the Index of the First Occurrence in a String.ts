function strStr(haystack: string, needle: string): number {
  const matLen = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + matLen) === needle) {
        return i;
      }
    }
  }
  return -1;
}
