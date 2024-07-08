function merge(intervals: number[][]): number[][] {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let temp = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= temp[1]) {
      temp[1] = Math.max(intervals[i][1], temp[1]);
    } else {
      result.push(temp);
      temp = intervals[i];
    }
  }

  result.push(temp);

  return result;
}
