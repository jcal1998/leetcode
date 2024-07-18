function minPathSum(grid: number[][]): number {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  const dp = Array.from({ length: rowLen }, () => Array(colLen).fill(0));
  dp[0][0] = grid[0][0];

  for (let i = 1; i < colLen; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let j = 1; j < rowLen; j++) {
    dp[j][0] = dp[j - 1][0] + grid[j][0];
  }

  for (let i = 1; i < rowLen; i++) {
    for (let j = 1; j < colLen; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[rowLen - 1][colLen - 1];
}
