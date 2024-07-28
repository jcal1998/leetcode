class RLEIterator {
  count: number;
  numArr: Array<number>;

  constructor(encoding: number[]) {
    this.count = 0;
    this.numArr = encoding;
  }

  next(n: number): number {
    while (this.count < this.numArr.length && n > this.numArr[this.count]) {
      n -= this.numArr[this.count];
      this.count += 2;
    }

    if (this.count >= this.numArr.length) return -1;

    this.numArr[this.count] -= n;
    return this.numArr[this.count + 1];
  }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */
