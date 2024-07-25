function lengthOfLIS(nums: number[]): number {
  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (j = 0; j < i; j++) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}
