function isValidSudoku(board: string[][]): boolean {
  const sudoku = {};
  for (let i = 0; i < 9; i++) {
    sudoku[i] = {};
  }
  for (let i = 0; i < 9; i++) {
    let temp = {};
    let temp2 = {};
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        temp[board[i][j]] = (temp[board[i][j]] || 0) + 1;
        if (temp[board[i][j]] > 1) return false;
        const key = 3 * Math.floor(i / 3) + Math.floor(j / 3);
        sudoku[key][board[i][j]] = (sudoku[key][board[i][j]] || 0) + 1;
        if (sudoku[key][board[i][j]] > 1) return false;
      }
      if (board[j][i] !== ".") {
        temp2[board[j][i]] = (temp2[board[j][i]] || 0) + 1;
        if (temp2[board[j][i]] > 1) return false;
      }
    }
    console.log(temp, temp2, sudoku);
  }

  return true;
}
