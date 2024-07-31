function pacificAtlantic(heights: number[][]): number[][] {
  const rowLen = heights.length;
  const colLen = heights[0].length;
  const pacificReachable = Array.from({ length: rowLen }, () =>
    Array(colLen).fill(false)
  );
  const atlanticReachable = Array.from({ length: rowLen }, () =>
    Array(colLen).fill(false)
  );

  const dfs = (
    row: number,
    column: number,
    canReach: boolean[][],
    prev: number
  ) => {
    if (
      row < 0 ||
      row >= rowLen ||
      column < 0 ||
      column >= colLen ||
      canReach[row][column] ||
      prev > heights[row][column]
    )
      return;

    canReach[row][column] = true;
    dfs(row + 1, column, canReach, heights[row][column]);
    dfs(row - 1, column, canReach, heights[row][column]);
    dfs(row, column + 1, canReach, heights[row][column]);
    dfs(row, column - 1, canReach, heights[row][column]);
  };

  for (let i = 0; i < rowLen; i++) {
    dfs(i, 0, pacificReachable, heights[i][0]);
    dfs(i, colLen - 1, atlanticReachable, heights[i][colLen - 1]);
  }

  for (let i = 0; i < colLen; i++) {
    dfs(0, i, pacificReachable, heights[0][i]);
    dfs(rowLen - 1, i, atlanticReachable, heights[rowLen - 1][i]);
  }

  let result: number[][] = [];
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (pacificReachable[i][j] && atlanticReachable[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
}
