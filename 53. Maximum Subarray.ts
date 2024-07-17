function maxSubArray(nums: number[]): number {
  let current = nums[0],
    max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], nums[i] + current);
    if (current > max) {
      max = current;
    }
  }

  return max;
}
