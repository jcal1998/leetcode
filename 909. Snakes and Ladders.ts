function snakesAndLadders(board: number[][]): number {
  const n = board.length;
  let currentQueue = [1];
  const visited = new Set<number>();
  let steps = 0;

  function getCellVal(pos: number): number {
    const row = n - 1 - Math.floor((pos - 1) / n);
    const col =
      Math.floor((pos - 1) / n) % 2 === 0
        ? (pos - 1) % n
        : n - 1 - ((pos - 1) % n);
    return board[row][col];
  }

  while (currentQueue.length > 0) {
    const nextQueue: number[] = [];
    steps++;

    while (currentQueue.length > 0) {
      const position = currentQueue.shift()!;
      for (let i = 1; i <= 6; i++) {
        let nextPos = position + i;
        if (nextPos > n * n) break;

        if (nextPos === n * n) return steps;

        if (visited.has(nextPos)) continue;

        visited.add(nextPos);
        const value = getCellVal(nextPos);
        if (value !== -1) {
          if (value === n * n) return steps;
          nextQueue.push(value);
        } else {
          nextQueue.push(nextPos);
        }
      }
    }

    currentQueue = nextQueue;
  }

  return -1;
}
