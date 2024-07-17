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

// chat gpt
class MinHeap {
  heap: [number, number, number][];

  constructor() {
    this.heap = [];
  }

  insert(val: [number, number, number]) {
    this.heap.push(val);
    this.heapifyUp();
  }

  extractMin(): [number, number, number] | null {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop()!;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();

    return min;
  }

  size() {
    return this.heap.length;
  }

  private heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index][0] < this.heap[this.getParentIndex(index)][0]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  private heapifyDown() {
    let index = 0;

    while (true) {
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);
      let smallest = index;

      if (
        left < this.heap.length &&
        this.heap[left][0] < this.heap[smallest][0]
      ) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right][0] < this.heap[smallest][0]
      ) {
        smallest = right;
      }

      if (smallest === index) break;

      this.swap(smallest, index);
      index = smallest;
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
  const result: [number, number][] = [];
  const minHeap = new MinHeap();

  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    minHeap.insert([nums1[i] + nums2[0], i, 0]);
  }

  while (k > 0 && minHeap.size() > 0) {
    const [sum, i, j] = minHeap.extractMin()!;
    result.push([nums1[i], nums2[j]]);
    k--;

    if (j + 1 < nums2.length) {
      minHeap.insert([nums1[i] + nums2[j + 1], i, j + 1]);
    }
  }

  return result;
}
