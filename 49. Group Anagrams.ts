function groupAnagrams(strs: string[]): string[][] {
  let result = [];
  const anamMap = {};
  let rIndex = 0;
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const tWord = word.split("").sort().join("");

    if (anamMap.hasOwnProperty(tWord)) {
      result[anamMap[tWord]].push(word);
    } else {
      anamMap[tWord] = rIndex;
      result[rIndex] = [word];
      rIndex++;
    }
  }

  return result;
}
