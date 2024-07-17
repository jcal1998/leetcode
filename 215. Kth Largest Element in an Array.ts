function findKthLargest(nums: number[], k: number): number {
  const sorted = nums.sort((a, b) => b - a);

  return sorted[k - 1];
}

// optimized
class MinHeap {
  heap: Array<number>;

  constructor() {
    this.heap = [];
  }

  getMin() {
    return this.heap[0] || null;
  }

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUp();
  }

  removeMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop() as number;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  private heapifyUp() {
    let last = this.heap.length - 1;

    while (this.heap[last] < this.heap[this.getParentIndex(last)]) {
      this.swap(last, this.getParentIndex(last));
      last = this.getParentIndex(last);
    }
  }

  private heapifyDown() {
    let last = 0;

    while (this.getLeftChildrenIndex(last) < this.heap.length) {
      let smaller = this.getLeftChildrenIndex(last);

      if (
        this.getRightChildrenIndex(last) < this.heap.length &&
        this.heap[this.getRightChildrenIndex(last)] <
          this.heap[this.getLeftChildrenIndex(last)]
      ) {
        smaller = this.getRightChildrenIndex(last);
      }

      if (this.heap[last] < this.heap[smaller]) {
        break;
      }

      this.swap(last, smaller);
      last = smaller;
    }
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildrenIndex(index: number) {
    return 2 * index + 1;
  }

  private getRightChildrenIndex(index: number) {
    return 2 * index + 2;
  }

  private swap(indexOne: number, indexTwo: number) {
    [this.heap[indexOne], this.heap[indexTwo]] = [
      this.heap[indexTwo],
      this.heap[indexOne],
    ];
  }

  size() {
    return this.heap.length;
  }
}

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap();

  for (const num of nums) {
    minHeap.insert(num);
    console.log(minHeap);
    if (minHeap.size() > k) {
      minHeap.removeMin();
    }
  }

  return minHeap.getMin();
}

// optimized 2
class MinHeap {
  heap: Array<number>;

  constructor(arr: Array<number> = []) {
    this.heap = arr;
    this.buildMinHeap();
  }

  getMin() {
    return this.heap[0] || null;
  }

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUp();
  }

  removeMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop() as number;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop() as number;
    this.heapifyDown(0);
    return min;
  }

  private heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index] < this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  heapifyDown(index: number) {
    let smallest = index;
    const left = this.getLeftChildrenIndex(index);
    const right = this.getRightChildrenIndex(index);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  private buildMinHeap() {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildrenIndex(index: number) {
    return 2 * index + 1;
  }

  private getRightChildrenIndex(index: number) {
    return 2 * index + 2;
  }

  private swap(indexOne: number, indexTwo: number) {
    [this.heap[indexOne], this.heap[indexTwo]] = [
      this.heap[indexTwo],
      this.heap[indexOne],
    ];
  }

  size() {
    return this.heap.length;
  }
}

function findKthLargest(nums: number[], k: number): number {
  const heap = new MinHeap(nums.slice(0, k));

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap.getMin()!) {
      heap.heap[0] = nums[i];
      heap.heapifyDown(0);
    }
  }

  return heap.getMin()!;
}
