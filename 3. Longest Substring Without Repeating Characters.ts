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

// Time complexity: O(n^2)
// Space complexity: O(n)

function lengthOfLongestSubstring2(s: string): number {
  let result = 0;
  let leftIndex = 0;
  const letterSet = new Set();

  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    while (letterSet.has(s[rightIndex])) {
      letterSet.delete(s[leftIndex]);
      leftIndex++;
    }

    letterSet.add(s[rightIndex]);
    result = Math.max(result, rightIndex - leftIndex + 1);
  }

  return result;
}

// Time complexity: O(n)
// Space complexity: O(n)
