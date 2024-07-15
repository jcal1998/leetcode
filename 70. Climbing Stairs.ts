function climbStairs(n: number): number {
  if (n === 0 || n === 1) return 1;

  let fDegree = 1;
  let sDegree = 1;
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result = fDegree + sDegree;
    fDegree = sDegree;
    sDegree = result;
  }

  return result;
}
