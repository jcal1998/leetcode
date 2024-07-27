function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const rowLen = obstacleGrid.length;
  const colLen = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1) return 0;

  const dp = Array.from({ length: rowLen }, () => Array(colLen).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i < colLen; i++) {
    dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1;
  }

  for (let j = 1; j < rowLen; j++) {
    dp[j][0] = obstacleGrid[j][0] === 1 || dp[j - 1][0] === 0 ? 0 : 1;
  }

  for (let i = 1; i < rowLen; i++) {
    for (let j = 1; j < colLen; j++) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[rowLen - 1][colLen - 1];
}
