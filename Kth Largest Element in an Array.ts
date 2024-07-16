function findKthLargest(nums: number[], k: number): number {
  const sorted = nums.sort((a, b) => b - a);

  return sorted[k - 1];
}
