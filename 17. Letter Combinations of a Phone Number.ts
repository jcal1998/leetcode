function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];
  const letterMapper = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let result: string[] = letterMapper[digits[0]];
  for (let i = 1; i < digits.length; i++) {
    const tempResult: string[] = [];
    const letters: string[] = letterMapper[digits[i]];
    result.forEach((elem) => {
      letters.forEach((letter) => {
        tempResult.push(elem + letter);
      });
    });
    result = tempResult;
  }

  return result;
}
