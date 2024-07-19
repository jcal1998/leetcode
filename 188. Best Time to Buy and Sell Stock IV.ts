function maxProfit(k: number, prices: number[]): number {
  const len = prices.length;

  const dp = Array.from({ length: k + 1 }, () => Array(len).fill(0));

  for (let t = 1; t <= k; t++) {
    let max = -prices[0];
    for (let d = 1; d < len; d++) {
      dp[t][d] = Math.max(max + prices[d], dp[t][d - 1]);
      max = Math.max(max, dp[t - 1][d] - prices[d]);
    }
  }

  return dp[k][len - 1];
}
