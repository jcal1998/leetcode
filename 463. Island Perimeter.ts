function islandPerimeter(grid: number[][]): number {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  let perimeter = 0;

  const getPerimeter = (i: number, j: number) => {
    let curPerimeter = 0;

    if (i === 0 || grid[i - 1][j] === 0) curPerimeter++;

    if (i === rowLen - 1 || grid[i + 1][j] === 0) curPerimeter++;

    if (j === 0 || grid[i][j - 1] === 0) curPerimeter++;

    if (j === colLen - 1 || grid[i][j + 1] === 0) curPerimeter++;

    console.log(i, j, curPerimeter);
    return curPerimeter;
  };

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === 1) {
        perimeter += getPerimeter(i, j);
      }
    }
  }

  return perimeter;
}
