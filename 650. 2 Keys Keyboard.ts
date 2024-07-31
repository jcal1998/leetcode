function minSteps(n: number): number {
  if (n == 1) return 0;

  const dp = Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = i;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        dp[i] = Math.min(dp[i], dp[j] + i / j);
        dp[i] = Math.min(dp[i], dp[i / j] + j);
      }
    }
  }

  return dp[n];
}
