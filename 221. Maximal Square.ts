function maximalSquare(matrix: string[][]): number {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;

  const dp = Array.from({ length: rowLen }, () => Array(colLen).fill(0));
  let max = 0;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        }
        max = Math.max(dp[i][j], max);
      }
    }
  }

  return max ** 2;
}
