function lengthOfLongestSubstring(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const letterMapper = {
      [letter]: i,
    };
    let tempResult = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (letterMapper.hasOwnProperty(s[j])) {
        i = letterMapper[s[j]];
        break;
      } else {
        letterMapper[s[j]] = j;
        tempResult++;
      }
    }
    if (tempResult > result) {
      result = tempResult;
    }
  }

  return result;
}
