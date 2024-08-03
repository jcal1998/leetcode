function getOrder(tasks: number[][]): number[] {
  const indexedTasks = tasks.map((task, index) => [...task, index]);
  indexedTasks.sort((a, b) => a[0] - b[0]);

  const result: number[] = [];
  const minHeap: [number, number, number][] = [];
  let currentTime = 0;
  let i = 0;

  while (result.length < tasks.length) {
    while (i < indexedTasks.length && indexedTasks[i][0] <= currentTime) {
      const [enqueueTime, processingTime, index] = indexedTasks[i];
      minHeap.push([processingTime, enqueueTime, index]);
      minHeap.sort((a, b) => a[0] - b[0] || a[2] - b[2]);
      i++;
    }

    if (minHeap.length === 0) {
      currentTime = indexedTasks[i][0];
    } else {
      const [processingTime, enqueueTime, index] = minHeap.shift()!;
      currentTime += processingTime;
      result.push(index);
    }
  }

  return result;
}

function getOrder(tasks: number[][]): number[] {
  const { length: totalTasks } = tasks;

  for (let i = 0; i < totalTasks; i++) tasks[i].push(i);

  tasks.sort(([t1], [t2]) => t1 - t2);

  const cpu = new MinPriorityQueue({
      compare: (t1: number[], t2: number[]): number =>
        t1[1] === t2[1] ? t1[2] - t2[2] : t1[1] - t2[1],
    }),
    order: number[] = [];

  let t = tasks[0][0],
    i = 0;

  while (cpu.size() > 0 || i < totalTasks) {
    for (; i < totalTasks && t >= tasks[i][0]; i++) cpu.enqueue(tasks[i]);

    if (cpu.size() > 0) {
      const { 1: time, 2: idx } = cpu.dequeue();
      order.push(idx);
      t += time;
    } else t = tasks[i][0];
  }

  return order;
}
