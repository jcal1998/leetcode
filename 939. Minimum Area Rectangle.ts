function minAreaRect(points: number[][]): number {
  points.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let result = Infinity;

  const pointMap = new Map<number, Set<number>>();

  for (const [x, y] of points) {
    if (!pointMap.has(x)) {
      pointMap.set(x, new Set());
    }
    pointMap.get(x).add(y);
  }

  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const [x2, y2] = points[j];

      if (x1 !== x2 && y1 !== y2) {
        if (pointMap.get(x1).has(y2) && pointMap.get(x2).has(y1)) {
          const area = Math.abs(x2 - x1) * Math.abs(y2 - y1);
          result = Math.min(result, area);
        }
      }
    }
  }

  return result === Infinity ? 0 : result;
}
