function findMinArrowShots(points: number[][]): number {
  if (points.length === 1) return 1;
  points.sort((a, b) => a[0] - b[0]);
  let count = 1;
  let temp = points[0];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= temp[1]) {
      temp[0] = points[i][0];
      temp[1] = points[i - 1][1];
    } else {
      count++;
      temp = points[i];
    }
  }

  return count;
}

// chat gpt
function findMinArrowShots(points: number[][]): number {
  if (points.length === 1) return 1;
  points.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let temp = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (temp < points[i][0]) {
      temp = points[i][1];
      count++;
    }
  }

  return count;
}
