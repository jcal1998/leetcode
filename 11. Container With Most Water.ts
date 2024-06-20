function maxArea(height: number[]): number {
  let biggestArea = 0;
  let left = 0,
    right = height.length - 1;

  while (left < right) {
    const currentHeight = Math.min(height[left], height[right]);
    const currentWidth = right - left;
    const currentArea = currentHeight * currentWidth;

    if (currentArea > biggestArea) {
      biggestArea = currentArea;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return biggestArea;
}
