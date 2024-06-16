function reverse(x: number): number {
  if (Math.abs(x) / 10 < 1) {
    return x;
  }
  const numStr = x < 0 ? x.toString().slice(1) : x.toString();
  const numArray = numStr.split("");
  const reversedArray = numArray.reverse();
  const resultStr = reversedArray.join("");
  const result = Number(resultStr);

  if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) + 1) return 0;
  return x < 0 ? -result : result;
}
