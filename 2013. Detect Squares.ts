class DetectSquares {
  points: Map<string, number>;

  constructor() {
    this.points = new Map<string, number>();
  }

  add(point: number[]): void {
    const [x, y] = point;
    const key = `${x},${y}`;
    this.points.set(key, (this.points.get(key) || 0) + 1);
  }

  count(point: number[]): number {
    const [newX, newY] = point;

    let squares = 0;
    for (const [key, count] of this.points) {
      const [x, y] = key.split(",").map(Number);
      if (newX === x || newY === y) continue;
      if (Math.abs(x - newX) === Math.abs(y - newY)) {
        const candidate1 = `${x},${newY}`;
        const candidate2 = `${newX},${y}`;
        if (this.points.has(candidate1) && this.points.has(candidate2)) {
          squares +=
            count * this.points.get(candidate1) * this.points.get(candidate2);
        }
      }
    }

    return squares;
  }
}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
