/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  const rowLen = board.length;
  const colLen = board[0].length;
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const verifyNeighbors = (row: number, col: number): number => {
    let count = 0;

    for (let [x, y] of directions) {
      const curRow = row + x;
      const curCol = col + y;

      if (
        curRow >= 0 &&
        curRow < rowLen &&
        curCol >= 0 &&
        curCol < colLen &&
        (board[curRow][curCol] === 1 || board[curRow][curCol] === 2)
      ) {
        count++;
      }
    }

    return count;
  };

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      const liveNei = verifyNeighbors(i, j);
      if (board[i][j] === 1 && (liveNei < 2 || liveNei > 3)) {
        board[i][j] = 2;
      }

      if (board[i][j] === 0 && liveNei === 3) {
        board[i][j] = -1;
      }
    }
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 0;
      }

      if (board[i][j] === -1) {
        board[i][j] = 1;
      }
    }
  }
}
