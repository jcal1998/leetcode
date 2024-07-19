function isInterleave(s1: string, s2: string, s3: string): boolean {
  const s1Len = s1.length;
  const s2Len = s2.length;
  const s3Len = s3.length;

  if (s1Len + s2Len !== s3Len) return false;
  const dp = Array.from({ length: s1Len + 1 }, () =>
    Array(s2Len + 1).fill(false)
  );
  dp[0][0] = true;

  for (let i = 1; i <= s1Len; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }

  for (let j = 1; j <= s2Len; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  for (let i = 1; i <= s1Len; i++) {
    for (let j = 1; j <= s2Len; j++) {
      dp[i][j] =
        (dp[i - 1][j] && s3[i + j - 1] === s1[i - 1]) ||
        (dp[i][j - 1] && s3[i + j - 1] === s2[j - 1]);
    }
  }

  return dp[s1Len][s2Len];
}
