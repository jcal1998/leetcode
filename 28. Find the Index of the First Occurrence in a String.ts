function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    let current = i;
    let matchIndex = 0;
    while (
      haystack[current] !== undefined &&
      needle[matchIndex] !== undefined &&
      haystack[current] === needle[matchIndex]
    ) {
      console.log(current, haystack[current], needle[matchIndex]);
      current++;
      matchIndex++;
    }

    console.log(matchIndex);
    if (matchIndex === needle.length) {
      console.log("caiu");
      return i;
    }
  }
  return -1;
}
