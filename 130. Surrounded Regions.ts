/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  if (!board) return;

  const rowsLen = board.length;
  const colsLen = board[0].length;

  const dfs = (i: number, j: number) => {
    if (i < 0 || j < 0 || j >= colsLen || i >= rowsLen || board[i][j] !== "O") {
      return;
    }

    board[i][j] = "S";

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  for (let i = 0; i < rowsLen; i++) {
    if (board[i][0] === "O") dfs(i, 0);
    if (board[i][colsLen - 1] === "O") dfs(i, colsLen - 1);
  }

  for (let j = 0; j < colsLen; j++) {
    if (board[0][j] === "O") dfs(0, j);
    if (board[rowsLen - 1][j] === "O") dfs(rowsLen - 1, j);
  }

  for (let i = 0; i < rowsLen; i++) {
    for (let j = 0; j < colsLen; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }

      if (board[i][j] === "S") {
        board[i][j] = "O";
      }
    }
  }
}
