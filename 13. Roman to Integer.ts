function romanToInt(s: string): number {
  const mappedRoman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let result = 0;
  let index = 0;
  while (index < s.length) {
    if (mappedRoman[s[index] + s[index + 1]]) {
      result += mappedRoman[s[index] + s[index + 1]];
      index++;
    } else if (mappedRoman[s[index]]) {
      result += mappedRoman[s[index]];
    }
    index++;
  }

  return result;
}
