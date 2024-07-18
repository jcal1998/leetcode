function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let prev = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    const temp = current;
    current = Math.max(current, prev + nums[i]);
    prev = temp;
  }

  return current;
}
