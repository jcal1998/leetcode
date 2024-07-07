function rotate(matrix: number[][]): void {
  const len = matrix.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  matrix.forEach((array) => array.reverse());
}
