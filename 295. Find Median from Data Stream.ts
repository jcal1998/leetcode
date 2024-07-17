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

  extractMin(): number | null {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop()!;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return min;
  }

  private heapifyUp() {
    let last = this.heap.length - 1;

    while (last > 0 && this.heap[last] < this.heap[this.getParentIndex(last)]) {
      this.swap(last, this.getParentIndex(last));
      last = this.getParentIndex(last);
    }
  }

  private heapifyDown() {
    let index = 0;

    while (true) {
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);
      let smallest = index;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      this.swap(smallest, index);
      index = smallest;
    }
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number) {
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

class MaxHeap {
  heap: Array<number>;

  constructor() {
    this.heap = [];
  }

  getMax() {
    return this.heap[0] || null;
  }

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMax(): number | null {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop()!;

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return max;
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

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number) {
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

class MedianFinder {
  minHeap: MinHeap;
  maxHeap: MaxHeap;
  count: number;
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
    this.count = 0;
  }

  addNum(num: number): void {
    if (this.count === 0 || num <= this.maxHeap.getMax()) {
      this.maxHeap.insert(num);
    } else {
      this.minHeap.insert(num);
    }

    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.insert(this.maxHeap.extractMax());
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.insert(this.minHeap.extractMin());
    }
    this.count++;
  }

  findMedian(): number {
    if (this.count % 2 === 0) {
      return (this.maxHeap.getMax() + this.minHeap.getMin()) / 2;
    }
    return this.maxHeap.getMax();
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
