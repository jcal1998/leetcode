function exist(board: string[][], word: string): boolean {
  let result = false;
  const rowLen = board.length;
  const colLen = board[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const backtrack = (curI: number, curJ: number, index: number) => {
    if (index === word.length) {
      result = true;
      return;
    }

    if (
      curI < 0 ||
      curI >= rowLen ||
      curJ < 0 ||
      curJ >= colLen ||
      board[curI][curJ] !== word[index]
    ) {
      return;
    }
    const temp = board[curI][curJ];

    board[curI][curJ] = "#";
    for (const [dx, dy] of directions) {
      backtrack(curI + dx, curJ + dy, index + 1);
    }
    board[curI][curJ] = temp;
  };

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (board[i][j] === word[0]) {
        backtrack(i, j, 0);
      }
    }
  }

  return result;
}
