function mySqrt(x: number): number {
  if (x < 2) return x;

  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sqr = mid * mid;

    if (sqr === x) {
      return mid;
    } else if (sqr < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}
