class MaxHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  insert(val: number) {
    this.heap.push(val);
    this.heapifyUp();
  }

  extractMax() {
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.heap.pop()!;

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();

    return max;
  }

  size() {
    return this.heap.length;
  }

  private heapifyUp() {
    let last = this.heap.length - 1;

    while (last > 0 && this.heap[last] > this.heap[this.getParentIndex(last)]) {
      this.swap(last, this.getParentIndex(last));
      last = this.getParentIndex(last);
    }
  }

  private heapifyDown() {
    let index = 0;

    while (true) {
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);
      let largest = index;

      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      this.swap(largest, index);
      index = largest;
    }
  }

  private getParentIndex(val: number) {
    return Math.floor((val - 1) / 2);
  }

  private getLeftChildIndex(val: number) {
    return 2 * val + 1;
  }

  private getRightChildIndex(val: number) {
    return 2 * val + 2;
  }

  private swap(indexOne: number, indexTwo: number) {
    [this.heap[indexOne], this.heap[indexTwo]] = [
      this.heap[indexTwo],
      this.heap[indexOne],
    ];
  }
}

function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  const len = profits.length;
  const projects = [];

  for (let i = 0; i < len; i++) {
    projects.push({
      profit: profits[i],
      capital: capital[i],
    });
  }

  projects.sort((a, b) => a.capital - b.capital);

  const maxHeap = new MaxHeap();
  let curCapital = w;
  let projIndex = 0;

  for (let i = 0; i < k; i++) {
    while (projIndex < len && projects[projIndex].capital <= curCapital) {
      maxHeap.insert(projects[projIndex].profit);
      projIndex++;
    }

    if (maxHeap.size() === 0) break;

    curCapital += maxHeap.extractMax();
  }

  return curCapital;
}
