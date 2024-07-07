/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  const zeroMapper = {
    row: {},
    col: {},
  };
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] === 0) {
        zeroMapper["row"][i] = true;
        zeroMapper["col"][j] = true;
      }
    }
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (zeroMapper["row"][i] || zeroMapper["col"][j]) {
        matrix[i][j] = 0;
      }
    }
  }
}
