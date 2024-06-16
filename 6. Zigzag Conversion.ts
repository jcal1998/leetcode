function convert(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  let currentRow = 0;
  let dirBottom = false;
  const result: string[][] = new Array(numRows).fill(null).map(() => []);
  for (let i = 0; i < s.length; i++) {
    result[currentRow].push(s[i]);

    if (currentRow === 0 || currentRow === numRows - 1) {
      dirBottom = !dirBottom;
    }

    if (dirBottom) {
      currentRow++;
    } else {
      currentRow--;
    }
  }

  const response = result.reduce((acc, row) => acc + row.join(""), "");

  return response;
}
