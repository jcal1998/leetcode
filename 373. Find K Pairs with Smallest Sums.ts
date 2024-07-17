interface pairSum {
  sum: number;
  pair: [number, number];
}

class MaxHeap {
  heap: pairSum[];

  constructor() {
    this.heap = [];
  }

  insert(val: [number, number]) {
    this.heap.push({
      sum: val[0] + val[1],
      pair: val,
    });
    this.heapifyUp();
  }

  extractMax(): [number, number] | null {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop()!.pair;

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();

    return max.pair;
  }

  size() {
    return this.heap.length;
  }

  private heapifyUp() {
    let last = this.heap.length - 1;

    while (
      last > 0 &&
      this.heap[last].sum > this.heap[this.getParentIndex(last)].sum
    ) {
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

      if (
        left < this.heap.length &&
        this.heap[left].sum > this.heap[largest].sum
      ) {
        largest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right].sum > this.heap[largest].sum
      ) {
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

function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  const result = [];
  const maxHeap = new MaxHeap();

  for (const num1 of nums1) {
    for (const num2 of nums2) {
      maxHeap.insert([num1, num2]);
      if (maxHeap.size() > k) {
        maxHeap.extractMax();
      }
    }
  }

  while (maxHeap.size() > 0) {
    result.push(maxHeap.extractMax());
  }

  return result.reverse();
}
