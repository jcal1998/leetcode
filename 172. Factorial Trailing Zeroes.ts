function trailingZeroes(n: number): number {
  const factorial = (num: number) => {
    if (num === 1) return 1;
    return num * factorial(num - 1);
  };

  let result = factorial(n);
  let count = 0;
  while (result > 10 && result % 10 === 0) {
    count++;
    result = result / 10;
  }

  return count;
}

// chat gpt
function trailingZeroes(n: number): number {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}
