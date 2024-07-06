function minWindow(s: string, t: string): string {
  if (s.length < t.length) return "";
  let result = "";
  let fast = 0;
  const letterMapper = {};

  for (let i = 0; i < t.length; i++) {
    letterMapper[t[i]] = (letterMapper[t[i]] || 0) + 1;
  }

  for (let slow = 0; slow < s.length; slow++) {
    if (!letterMapper[s[slow]]) continue;
    let fast = slow;
    const tempMap = { ...letterMapper };

    while (fast < s.length) {
      if (tempMap[s[fast]]) {
        tempMap[s[fast]]--;
        if (tempMap[s[fast]] === 0) delete tempMap[s[fast]];
      }

      if (!Object.keys(tempMap).length) break;
      fast++;
    }

    if (Object.keys(tempMap).length) {
      return result;
    }
    const tempResult = s.substring(slow, fast + 1);
    if (result === "") result = tempResult;
    if (tempResult.length < result.length) {
      result = tempResult;
    }
  }

  return result;
}

// chatgpt
function minWindow(s: string, t: string): string {
  if (s.length < t.length) return "";
  let left = 0;
  let right = 0;
  let minStart = 0;
  let minLen = Infinity;
  const letterMapper = {};

  for (let i = 0; i < t.length; i++) {
    letterMapper[t[i]] = (letterMapper[t[i]] || 0) + 1;
  }
  let count = Object.keys(letterMapper).length;

  while (right < s.length) {
    if (letterMapper[s[right]] != null) {
      letterMapper[s[right]]--;
      if (letterMapper[s[right]] === 0) count--;
    }
    right++;

    while (count === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        minStart = left;
      }

      if (letterMapper[s[left]] != null) {
        letterMapper[s[left]]++;
        if (letterMapper[s[left]] > 0) count++;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}
