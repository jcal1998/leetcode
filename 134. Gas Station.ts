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

// chatgpt
function canCompleteCircuit(gas: number[], cost: number[]): number {
  const len = gas.length;
  let currentGas = 0;
  let totalGas = 0;
  let result = 0;

  for (let i = 0; i < len; i++) {
    totalGas += gas[i] - cost[i];
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      currentGas = 0;
      result = i + 1;
    }
  }

  return totalGas >= 0 ? result : -1;
}
