class MinStack {
  stack: number[];
  minStack: number[];
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    const min = this.getMin() !== undefined ? this.getMin() : Infinity;
    this.minStack.push(Math.min(min, val));
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    const len = this.stack.length;
    return this.stack[len - 1];
  }

  getMin(): number {
    const len = this.minStack.length;
    return this.minStack[len - 1];
  }
}
