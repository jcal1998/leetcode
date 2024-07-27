function minDistance(word1: string, word2: string): number {
  const w1Len = word1.length;
  const w2Len = word2.length;

  const dp = Array.from({ length: w1Len + 1 }, () => Array(w2Len + 1).fill(0));
  dp[0][0] === 0;

  for (let i = 0; i <= w1Len; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= w2Len; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= w1Len; i++) {
    for (let j = 1; j <= w2Len; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[w1Len][w2Len];
}
