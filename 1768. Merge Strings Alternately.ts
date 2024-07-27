function mergeAlternately(word1: string, word2: string): string {
  const len = word1.length + word2.length;
  let result = "";
  let cur1 = 0;
  let cur2 = 0;
  let cur = 0;
  while (cur1 < word1.length && cur2 < word2.length) {
    if (cur % 2 === 0) {
      result += word1[cur1];
      cur1++;
    } else {
      result += word2[cur2];
      cur2++;
    }
    cur++;
  }

  if (cur1 < word1.length) {
    result += word1.slice(cur1);
  }

  if (cur2 < word2.length) {
    result += word2.slice(cur2);
  }

  return result;
}

function mergeAlternately(word1: string, word2: string): string {
  let result = "";

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }

  return result;
}
