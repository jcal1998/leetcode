function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  let result = n < 0 ? 1 / x : x;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  for (let i = 1; i < Math.abs(n); i++) {
    result = result * x;
  }

  return result;
}

// chat gpt
function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let result = 1;
  while (n > 0) {
    if (n % 2 !== 0) {
      result *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  return result;
}
