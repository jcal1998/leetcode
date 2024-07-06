function spiralOrder(matrix: number[][]): number[] {
  const result = [];
  const horLen = matrix.length;
  const verLen = matrix[0].length;
  const totalLen = matrix[0].length * matrix.length;
  let hor = { min: 0, max: horLen - 1 };
  let ver = { min: 0, max: verLen - 1 };

  while (result.length < totalLen) {
    for (let i = ver.min; i <= ver.max; i++) {
      result.push(matrix[hor.min][i]);
    }
    hor.min++;

    for (let i = hor.min; i <= hor.max; i++) {
      result.push(matrix[i][ver.max]);
    }
    ver.max--;

    if (hor.min <= hor.max) {
      for (let i = ver.max; i >= ver.min; i--) {
        result.push(matrix[hor.max][i]);
      }
    }
    hor.max--;

    if (ver.min <= ver.max) {
      for (let i = hor.max; i >= hor.min; i--) {
        result.push(matrix[i][ver.min]);
      }
    }
    ver.min++;
  }

  return result;
}

// chat gpt
function spiralOrder(matrix: number[][]): number[] {
  const result = [];

  while (matrix.length) {
    const firstLine = matrix.shift();
    if (firstLine) result.push(...firstLine);
    matrix = rotate(matrix);
  }

  return result;
}

const rotate = (matrix: number[][]) => {
  const rotated = [];
  if (!matrix.length) return [];

  for (let col = matrix[0].length - 1; col >= 0; col--) {
    const newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    rotated.push(newRow);
  }

  return rotated;
};
