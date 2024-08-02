class Solution {
  private prefixSums: number[];
  private totalSum: number;

  constructor(w: number[]) {
    this.prefixSums = new Array(w.length).fill(0);
    this.totalSum = 0;

    for (let i = 0; i < w.length; i++) {
      this.totalSum += w[i];
      this.prefixSums[i] = this.totalSum;
    }
  }

  pickIndex(): number {
    const target = Math.random() * this.totalSum;

    let low = 0;
    let high = this.prefixSums.length - 1;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (target > this.prefixSums[mid]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
