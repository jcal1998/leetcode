function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const graph = new Map<string, Map<string, number>>();

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];

    if (!graph.has(a)) graph.set(a, new Map());
    if (!graph.has(b)) graph.set(b, new Map());

    graph.get(a).set(b, value);
    graph.get(b).set(a, 1 / value);
  }

  const dfs = (start: string, end: string, visited: Set<string>): number => {
    if (!graph.has(start) || !graph.has(end)) return -1;
    if (start === end) return 1;

    visited.add(start);

    const neighboors = graph.get(start);
    for (const [neighboor, value] of neighboors) {
      if (visited.has(neighboor)) continue;

      const result = dfs(neighboor, end, visited);
      if (result !== -1) {
        return result * value;
      }
    }

    return -1;
  };

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const [c, d] = queries[i];
    if (c === d && graph.get(c)) {
      result.push(1);
    } else {
      result.push(dfs(c, d, new Set()));
    }
  }

  return result;
}
