function canCompleteCircuit(gas: number[], cost: number[]): number {
  const len = gas.length;
  let result = -1;
  for (let i = 0; i < len; i++) {
    if (gas[i] === 0) continue;
    let index = i;
    let tank = 0;
    while (index < len + i) {
      let tempIndex = index;
      if (tempIndex >= len) {
        tempIndex -= len;
      }

      tank = tank + gas[tempIndex] - cost[tempIndex];
      if (tank < 0) break;
      index++;
    }

    if (index === i + len) {
      return i;
    }
  }

  return result;
}
