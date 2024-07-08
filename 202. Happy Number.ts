function isHappy(n: number): boolean {
  const numSet = new Set();
  while (n !== 1 && !numSet.has(n)) {
    numSet.add(n);
    n = squareSum(n);
  }

  return n === 1;
}

const squareSum = (n: number) => {
  let sum = 0;

  while (n > 0) {
    const left = n % 10;
    sum = sum + left * left;
    n = Math.floor(n / 10);
  }

  return sum;
};

// chatgpt
function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;

  do {
    slow = squareSum(slow);
    fast = squareSum(squareSum(fast));
  } while (slow !== fast);

  return slow === 1;
}

const squareSum = (n: number) => {
  let sum = 0;

  while (n > 0) {
    const left = n % 10;
    sum = sum + left * left;
    n = Math.floor(n / 10);
  }

  return sum;
};
