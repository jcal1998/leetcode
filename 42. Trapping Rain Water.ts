function trap(height: number[]): number {
  const len = height.length;
  const fromLeft = Array(len).fill(0);
  const fromRight = Array(len).fill(0);

  fromLeft[0] = height[0];
  for (let i = 1; i < len; i++) {
    fromLeft[i] = Math.max(height[i], fromLeft[i - 1]);
  }

  fromRight[len - 1] = height[len - 1];
  for (let j = len - 2; j >= 0; j--) {
    fromRight[j] = Math.max(fromRight[j + 1], height[j]);
  }

  let result = 0;
  for (let i = 0; i < len; i++) {
    result += Math.min(fromLeft[i], fromRight[i]) - height[i];
  }

  return result;
}
