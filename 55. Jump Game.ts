function canJump(nums: number[]): boolean {
  let lIndex = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= lIndex) {
      lIndex = i;
    }
  }
  return lIndex === 0;
}
