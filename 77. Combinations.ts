function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  const backtracking = (index: number, current: number[]) => {
    if (current.length === k) {
      result.push([...current]);
      return;
    }

    for (let i = index; i <= n; i++) {
      current.push(i);
      backtracking(i + 1, current);
      current.pop();
    }
  };

  backtracking(1, []);
  return result;
}
