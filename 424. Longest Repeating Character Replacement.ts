function characterReplacement(s: string, k: number): number {
  let left = 0;
  let right = 0;
  const charCount: { [key: string]: number } = {};
  let maxCount = 0;
  let maxLength = 0;

  while (right < s.length) {
    const char = s[right];
    charCount[char] = (charCount[char] || 0) + 1;
    maxCount = Math.max(maxCount, charCount[char]);

    while (right - left + 1 - maxCount > k) {
      charCount[s[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}
