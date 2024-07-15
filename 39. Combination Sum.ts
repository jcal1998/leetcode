function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  const backtrack = (index: number, current: number[], sum: number) => {
    if (sum === target) {
      result.push([...current]);
      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(i, current, sum + candidates[i]);
      current.pop();
    }
  };

  backtrack(0, [], 0);
  return result;
}
