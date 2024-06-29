function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  let left = 0,
    right = 0;

  const dfs = (current: string, left: number, right: number) => {
    if (left === n && right === n) {
      result.push(current);
    }

    if (left < n) {
      dfs(current + "(", left + 1, right);
    }

    if (left > right) {
      dfs(current + ")", left, right + 1);
    }
  };

  dfs("", left, right);

  return result;
}
