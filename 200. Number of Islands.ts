function numIslands(grid: string[][]): number {
  let result = 0;
  const rowLen = grid.length;
  const colLen = grid[0].length;

  const dfs = (i: number, j: number) => {
    if (i >= rowLen || j >= colLen || i < 0 || j < 0 || grid[i][j] === "0") {
      return;
    }

    grid[i][j] = "0";

    dfs(i - 1, j);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i, j + 1);
  };

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === "1") {
        result++;
        dfs(i, j);
      }
    }
  }

  return result;
}
