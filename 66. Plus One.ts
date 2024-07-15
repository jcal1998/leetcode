function plusOne(digits: number[]): number[] {
  let lIndex = digits.length - 1;

  digits[lIndex] += 1;
  while (digits[lIndex] >= 10 && lIndex >= 0) {
    digits[lIndex] = 0;
    if (lIndex >= 1) {
      digits[lIndex - 1] += 1;
    } else {
      digits.unshift(1);
    }
    lIndex--;
  }

  return digits;
}
