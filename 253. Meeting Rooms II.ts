function minMeetingRooms(intervals: number[][]): number {
  const startTimes = [];
  const endTimes = [];

  for (const [start, end] of intervals) {
    startTimes.push(start);
    endTimes.push(end);
  }

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  let rooms = 0;
  let endPointer = 0;

  for (let startPointer = 0; startPointer < startTimes.length; startPointer++) {
    if (startTimes[startPointer] < endTimes[endPointer]) {
      rooms++;
    } else {
      endPointer++;
    }
  }

  return rooms;
}
