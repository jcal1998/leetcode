function canMeasureWater(x: number, y: number, target: number): boolean {
  if (target > x + y) return false;

  const queue: [number, number][] = [[0, 0]];
  const visited = new Set<string>(["0,0"]);

  while (queue.length) {
    const [curX, curY] = queue.shift();

    if (curX === target || curY === target || curX + curY === target)
      return true;

    const possibilities = [
      [x, curY],
      [curX, y],
      [0, curY],
      [curX, 0],
      [curX - Math.min(curX, y - curY), curY + Math.min(curX, y - curY)],
      [curX + Math.min(curY, x - curX), curY - Math.min(curY, x - curX)],
    ];

    for (const [newX, newY] of possibilities) {
      if (!visited.has(`${newX}, ${newY}`)) {
        queue.push([newX, newY]);
        visited.add(`${newX}, ${newY}`);
      }
    }
  }

  return false;
}

function canMeasureWater(x: number, y: number, target: number): boolean {
  if (target > x + y) return false;

  const visited = new Set<string>();

  const dfs = (curX: number, curY: number) => {
    if (curX === target || curY === target || curX + curY === target)
      return true;

    if (visited.has(`${curX}, ${curY}`)) {
      return false;
    }

    visited.add(`${curX}, ${curY}`);

    return (
      dfs(x, curY) ||
      dfs(curX, y) ||
      dfs(0, curY) ||
      dfs(curX, 0) ||
      dfs(curX - Math.min(curX, y - curY), curY + Math.min(curX, y - curY)) ||
      dfs(curX + Math.min(curY, x - curX), curY - Math.min(curY, x - curX))
    );
  };

  return dfs(0, 0);
}

function canMeasureWater(x: number, y: number, target: number): boolean {
  if (target > x + y) return false;

  const gcd = (a: number, b: number): number => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  return target % gcd(x, y) === 0;
}
