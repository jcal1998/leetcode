function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result = [];
  const len = intervals.length;

  let i = 0;

  while (i < len && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  while (i < len) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}
