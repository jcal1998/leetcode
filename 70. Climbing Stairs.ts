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

function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const dp = new Array(n);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
