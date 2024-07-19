class RandomizedSet {
  private nums: Array<number>;
  private indexMap: Map<number, number>;

  constructor() {
    this.nums = [];
    this.indexMap = new Map<number, number>();
  }

  insert(val: number): boolean {
    if (this.indexMap.has(val)) {
      return false;
    }

    this.nums.push(val);
    this.indexMap.set(val, this.nums.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.indexMap.has(val)) {
      return false;
    }

    const index = this.indexMap.get(val);
    this.nums[index] = this.nums[this.nums.length - 1];
    this.indexMap.set(this.nums[this.nums.length - 1], index);
    this.nums.pop();
    this.indexMap.delete(val);
    return true;
  }

  getRandom(): number {
    const index = Math.floor(Math.random() * this.nums.length);
    return this.nums[index];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
